const styles = {
  header: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    pb: { xs: 0, md: 5 },
  },
  text: (reverse) => ({
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "50%" },
    gap: 1,
    order: { xs: 1, md: reverse ? 1 : 2 },
    alignItems: reverse ? "flex-start" : "flex-end",
  }),
  searchBar: (reverse) => ({
    display: "flex",
    width: { xs: "100%", md: "25%" },
    mt: { xs: 4, md: 0 },
    order: { xs: 2, md: reverse ? 2 : 1 },
  }),
};
export default styles;
