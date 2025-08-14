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
  detailsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    mt: 6,
  },
  yellowBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#feeda7ff",
    p: 4,
    borderRadius: 8,
    gap: 2,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    wordSpacing: 10,
  },
};
export default styles;
