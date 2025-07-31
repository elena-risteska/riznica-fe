import { useMediaQuery, useTheme } from "@mui/material";

const useVisibleItems = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–900px
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900–1200px
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl")); // 1200–1536px
  const isXl = useMediaQuery(theme.breakpoints.up("xl")); // >1536px

  if (isXs) return 1;
  if (isSm) return 2;
  if (isMd) return 3;
  if (isLg) return 4;
  if (isXl) return 5;

  return 4;
};

export default useVisibleItems;
