const styles = {
  photoBox: {
    display: { xs: "none", md: "flex" },
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "45%" },
    justifyContent: "center",
    alignItems: "center",
    px: { xs: 4, md: 0 },
    backgroundColor: "info.main",
    borderRadius: "1000px 0 0 1000px",
  },
  heading: { textAlign: "center", mb: 1, color: "white" },
  text: { textAlign: "center", mb: 10, color: "white" },
  photo: { width: "400px", height: "auto", borderRadius: 10 },
  subtitle: {
    mt: 1,
    color: "text.secondary",
    fontStyle: "italic",
    letterSpacing: 2,
  },
};
export default styles;
