const styles = {
  textHome: { display: "flex", flexDirection: "column", ml: { xs: 0, md: 10 } },
  searchHome: {
    display: "flex",
    my: 8,
    mx: "auto",
    width: { xs: "100%", md: "30%" },
  },
  mapImage: {
    width: "100%",
    height: "auto",
    objectFit: "fill",
    py: { xs: 0, sm: 5 },
    px: { xs: 0, sm: 7 },
  },
  locationsHome: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: { xs: "center", md: "flex-start" },
    px: { xs: 0, sm: 7.5 },
    mt: 8,
  },
  secondaryHome: {
    width: { xs: "80%", sm: "25%", lg: "15%" },
    borderRadius: 4,
    border: 3,
    mt: { xs: 2, md: 0 },
  },
};

export default styles;
