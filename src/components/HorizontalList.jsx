import { useRef, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { chevrons, scrollContainer, cardWrapper } from "./styles";
import {
  getItemWidthCalc,
  scrollLeft,
  scrollRight,
  checkScroll as performCheckScroll,
} from "../utils/utilities";
import {
  useMaxHeightEffect,
  useScrollCheckEffect,
  useAutoScrollEffect,
} from "../utils/horizontalListEffects";

const HorizontalList = ({
  items = [],
  renderItem,
  visibleItems,
  cardType = "photo",
}) => {
  const theme = useTheme();
  const gapPx = 16;

  const containerRef = useRef(null);
  const cardsRefs = useRef([]);

  const [maxHeight, setMaxHeight] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const itemWidthCalc = getItemWidthCalc(gapPx, visibleItems);

  const checkScroll = () =>
    performCheckScroll(containerRef, setCanScrollLeft, setCanScrollRight);

  const handleScrollLeft = () =>
    scrollLeft(containerRef, visibleItems, gapPx, canScrollLeft);

  const handleScrollRight = () =>
    scrollRight(containerRef, visibleItems, gapPx, canScrollRight);

  useMaxHeightEffect(cardsRefs, cardType, items, setMaxHeight, checkScroll);

  useScrollCheckEffect(containerRef, checkScroll);

  useAutoScrollEffect(
    containerRef,
    visibleItems,
    gapPx,
    canScrollRight,
    isHovered
  );

  return (
    <Box display="flex" alignItems="center" width="100%" gap={1}>
      <IconButton
        onClick={handleScrollLeft}
        sx={chevrons(theme, !canScrollLeft)}
        disabled={!canScrollLeft}
      >
        <ChevronLeft sx={{ fontSize: 26 }} />
      </IconButton>

      <Box
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={scrollContainer(gapPx, maxHeight, cardType)}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            ref={(el) => (cardsRefs.current[index] = el)}
            sx={cardWrapper(
              index,
              itemWidthCalc,
              maxHeight,
              cardType,
              cardsRefs
            )}
          >
            {renderItem(item)}
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleScrollRight}
        sx={chevrons(theme, !canScrollRight)}
        disabled={!canScrollRight}
      >
        <ChevronRight sx={{ fontSize: 26 }} />
      </IconButton>
    </Box>
  );
};

export default HorizontalList;
