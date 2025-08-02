import L from "leaflet";

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
  map: { height: "400px", borderRadius: 10, overflow: "hidden", boxShadow: 3 },
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

const svgIcon = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48" fill="#B12C00">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 32 16 32s16-20 16-32c0-8.837-7.163-16-16-16zM16 24a8 8 0 110-16 8 8 0 010 16z"/>
  </svg>
`);

const primaryColorIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${svgIcon}`,
  iconSize: [32, 48],
  iconAnchor: [16, 48],
  popupAnchor: [0, -48],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export { styles, chevrons, scrollContainer, cardWrapper, primaryColorIcon };
