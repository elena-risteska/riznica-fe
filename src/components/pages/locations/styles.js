const styles = {
  header: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    pb: { xs: 0, md: 5 },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "50%" },
    gap: 1,
  },
  searchBar: {
    display: "flex",
    width: { xs: "100%", md: "25%" },
    mt: { xs: 4, md: 0 },
  },
};
export default styles;
