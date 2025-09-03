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
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    width: "100%",
    mt: 6,
    alignItems: "center",
  },
  yellowBox: {
    display: "flex",
    flexDirection: "column",
    border: "15px solid",
    borderColor: "primary.main",
    p: 4,
    borderRadius: 10,
    gap: 2,
  },

  textBox: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "40%", lg: "50%" },
    wordSpacing: 10,
    my: { xs: 4, md: 0 },
    textAlign: "justify",
  },
  storyBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-around",
    alignItems: "center",
  },
};
export default styles;
