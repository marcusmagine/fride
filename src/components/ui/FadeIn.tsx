"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(show, delay);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    // IntersectionObserver-callbacks pausas i bakgrundsflikar, så ett element
    // som redan syns avslöjas direkt via rect-koll i stället.
    const reveal = () => {
      if (el.classList.contains("visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(show, delay);
        observer.disconnect();
      } else {
        observer.observe(el);
      }
    };

    const timer = setTimeout(reveal, 0);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") reveal();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", reveal);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", reveal);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in ${className}`} suppressHydrationWarning>
      {children}
    </div>
  );
}
