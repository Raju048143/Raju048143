import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it receives the `.active` class,
 * triggering the CSS reveal animation defined in index.css.
 *
 * @param {object}  options
 * @param {string}  options.threshold  — visibility ratio to trigger (default 0.15)
 * @param {string}  options.rootMargin — margin around root (default "0px 0px -60px 0px")
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el); // animate only once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
