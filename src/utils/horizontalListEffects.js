import { useEffect } from "react";
import { scrollAmount } from "../utils/utilities";

export const useMaxHeightEffect = (
  cardsRefs,
  cardType,
  items,
  setMaxHeight,
  checkScroll
) => {
  useEffect(() => {
    if (!cardsRefs.current) return;
    let tallest = 0;
    cardsRefs.current.forEach((card) => {
      if (card) {
        const h = card.getBoundingClientRect().height;
        if (h > tallest) tallest = h;
      }
    });

    if (cardType === "comment") {
      tallest = Math.max(tallest, 150);
    }

    setMaxHeight(tallest);
    checkScroll();
  }, [items, cardType]);
};

export const useScrollCheckEffect = (containerRef, checkScroll) => {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);
};

export const useAutoScrollEffect = (
  containerRef,
  visibleItems,
  gapPx,
  canScrollRight,
  isHovered
) => {
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!containerRef.current) return;

      if (canScrollRight) {
        containerRef.current.scrollBy({
          left: scrollAmount(containerRef, visibleItems, gapPx),
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [canScrollRight, isHovered]);
};
