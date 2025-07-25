import { useRef, useState, useEffect } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const HorizontalList = ({ items = [], renderItem, visibleCount = 4 }) => {
  const theme = useTheme();

  const containerRef = useRef(null);
  const cardsRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const gapPx = 16;
  const totalGapsPx = gapPx * (visibleCount - 1);
  const itemWidthCalc = `calc((100% - ${totalGapsPx}px) / ${visibleCount})`;

  useEffect(() => {
    if (!cardsRefs.current) return;
    let tallest = 0;
    cardsRefs.current.forEach((card) => {
      if (card) {
        const h = card.getBoundingClientRect().height;
        if (h > tallest) tallest = h;
      }
    });
    setMaxHeight(tallest);
    checkScroll();
  }, [items]);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

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

  const scrollAmount = () => {
    if (!containerRef.current) return 0;
    return containerRef.current.clientWidth / visibleCount + gapPx;
  };

  const scrollLeft = () => {
    if (!containerRef.current || !canScrollLeft) return;
    containerRef.current.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!containerRef.current || !canScrollRight) return;
    containerRef.current.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  };

  const chevronButtonSx = (disabled) => ({
    bgcolor: disabled ? theme.palette.action.disabledBackground : "transparent",
    color: disabled ? theme.palette.action.disabled : theme.palette.info.main,
    borderRadius: "50%",
    boxShadow: disabled ? "none" : "0 2px 8px rgba(0,0,0,0.15)",
    transition:
      "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
    cursor: disabled ? "default" : "pointer",
    pointerEvents: disabled ? "none" : "auto",
    "&:hover": disabled
      ? {}
      : {
          bgcolor: theme.palette.info.main,
          color: theme.palette.info.contrastText,
          transform: "scale(1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        },
  });

  return (
    <Box display="flex" alignItems="center" width="100%" gap={1}>
      <IconButton
        onClick={scrollLeft}
        sx={chevronButtonSx(!canScrollLeft)}
        disabled={!canScrollLeft}
      >
        <ChevronLeft sx={{ fontSize: 26 }} />
      </IconButton>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: `${gapPx}px`,
          overflowX: "auto",
          scrollBehavior: "smooth",
          flexGrow: 1,
          scrollSnapType: "x mandatory",
          minHeight: maxHeight || 250,
          py: 4,
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            ref={(el) => (cardsRefs.current[index] = el)}
            sx={{
              flex: `0 0 ${itemWidthCalc}`,
              scrollSnapAlign: "start",
              boxSizing: "border-box",
              height: maxHeight || "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              px: 1,
              paddingBottom: maxHeight
                ? `${
                    maxHeight -
                    (cardsRefs.current[index]?.getBoundingClientRect().height ||
                      0)
                  }px`
                : 0,
              transition: "padding-bottom 0.3s",
            }}
          >
            {renderItem(item)}
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={scrollRight}
        sx={chevronButtonSx(!canScrollRight)}
        disabled={!canScrollRight}
      >
        <ChevronRight sx={{ fontSize: 26 }} />
      </IconButton>
    </Box>
  );
};

export default HorizontalList;
