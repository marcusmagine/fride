"use client";

import { useEffect } from "react";

export function ScrollAnimationProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px" }
    );

    // IntersectionObserver callbacks are paused in background tabs, so
    // elements already in the viewport are revealed directly via rect check.
    const reveal = () => {
      const viewportHeight = window.innerHeight;
      document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          el.classList.add("visible");
          observer.unobserve(el);
        } else {
          observer.observe(el);
        }
      });
    };

    const timer = setTimeout(reveal, 0);

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") reveal();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pageshow", reveal);

    const mutation = new MutationObserver(reveal);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutation.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("pageshow", reveal);
    };
  }, []);

  return null;
}
