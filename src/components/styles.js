const styles = {
  errorIcon: {
    fontSize: 60,
    mb: 2,
  },
  reloadButton: {
    width: "25%",
    borderRadius: "1rem",
  },
  errorBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
};

const chevrons = (theme, disabled) => ({
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

const scrollContainer = (gapPx, maxHeight, cardType) => ({
  display: "flex",
  gap: `${gapPx}px`,
  overflowX: "auto",
  scrollBehavior: "smooth",
  flexGrow: 1,
  scrollSnapType: "x mandatory",
  minHeight: maxHeight || (cardType === "comment" ? 150 : 400),
  py: 4,
  "&::-webkit-scrollbar": { display: "none" },
  MsOverflowStyle: "none",
  scrollbarWidth: "none",
});

const cardWrapper = (index, itemWidthCalc, maxHeight, cardType, cardsRefs) => {
  const height = cardsRefs.current[index]?.getBoundingClientRect().height || 0;
  const paddingBottom =
    cardType === "photo" && maxHeight ? `${maxHeight - height}px` : 0;

  return {
    flex: `0 0 ${itemWidthCalc}`,
    scrollSnapAlign: "start",
    boxSizing: "border-box",
    height: cardType === "photo" ? maxHeight || "auto" : "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    px: 1,
    paddingBottom,
    transition: "padding-bottom 0.3s",
  };
};
export { styles, chevrons, scrollContainer, cardWrapper };
