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

    const observeAll = () => {
      document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Defer until after React hydration is complete
    const timer = setTimeout(observeAll, 0);
    requestAnimationFrame(() => {
      requestAnimationFrame(observeAll);
    });

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
