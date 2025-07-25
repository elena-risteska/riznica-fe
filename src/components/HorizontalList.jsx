import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { styles } from "./styles";

const HorizontalList = ({ items = [], renderItem, visibleCount = 4 }) => {
  const [startIndex, setStartIndex] = useState(0);

  const rotateLeft = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const rotateRight = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(items[(startIndex + i) % items.length]);
    }
    return result;
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={rotateLeft} sx={styles.chevrons}>
        <ChevronLeft sx={{ fontSize: 30 }} />
      </IconButton>

      <Box display="flex" gap={2}>
        {getVisibleItems().map((item, index) => (
          <Box key={index}>{renderItem(item)}</Box>
        ))}
      </Box>

      <IconButton onClick={rotateRight} sx={styles.chevrons}>
        <ChevronRight sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
};

export default HorizontalList;
