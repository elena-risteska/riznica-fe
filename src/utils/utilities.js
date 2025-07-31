export const handleSearchKeyDown = (e, onSubmit) => {
  if (e.key === "Enter" && onSubmit) {
    e.preventDefault();
    onSubmit(e);
  }
};

export const getItemWidthCalc = (gapPx, visibleItems) => {
  const totalGapsPx = gapPx * (visibleItems - 1);
  return `calc((100% - ${totalGapsPx}px) / ${visibleItems})`;
};

export const scrollAmount = (containerRef, visibleItems, gapPx) => {
  if (!containerRef.current) return 0;
  return containerRef.current.clientWidth / visibleItems + gapPx;
};

export const scrollLeft = (
  containerRef,
  visibleItems,
  gapPx,
  canScrollLeft
) => {
  if (!containerRef.current || !canScrollLeft) return;
  containerRef.current.scrollBy({
    left: -scrollAmount(containerRef, visibleItems, gapPx),
    behavior: "smooth",
  });
};

export const scrollRight = (
  containerRef,
  visibleItems,
  gapPx,
  canScrollRight
) => {
  if (!containerRef.current || !canScrollRight) return;
  containerRef.current.scrollBy({
    left: scrollAmount(containerRef, visibleItems, gapPx),
    behavior: "smooth",
  });
};

export const checkScroll = (
  containerRef,
  setCanScrollLeft,
  setCanScrollRight
) => {
  if (!containerRef.current) return;
  const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
  setCanScrollLeft(scrollLeft > 0);
  setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
};
