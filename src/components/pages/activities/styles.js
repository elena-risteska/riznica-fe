const styles = {
  row: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-evenly",
    width: "100%",
    my: 15,
    gap: 4,
  },
  text: (reverse) => ({
    display: "flex",
    flexDirection: "column",
    width: { xs: "80%", md: "20%" },
    justifyContent: "space-evenly",
    alignItems: { xs: "center", md: reverse ? "flex-end" : "flex-start" },
    textAlign: { xs: "center", md: reverse ? "right" : "left" },
    mx: { xs: "auto", md: 0 },
    order: { xs: 1, md: reverse ? 2 : 1 },
  }),
  button: {
    width: { xs: "80%", md: "60%" },
    borderRadius: 4,
    border: 3,
    mt: { xs: 2, md: 10 },
  },
  photo: (reverse) => ({
    width: { xs: "250px", sm: "400px" },
    height: "auto",
    borderRadius: 10,
    mx: { xs: "auto", md: 0 },
    order: { xs: 1, md: reverse ? 1 : 2 },
  }),
};
export default styles;
