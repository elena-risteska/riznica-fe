const styles = {
  fullScreen: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `repeating-radial-gradient(circle, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 12px) !important`,
    backgroundSize: "20px 20px",
    px: { xs: 0, sm: 8 },
    m: 0,
  },
  photoBox: {
    display: { xs: "none", md: "flex" },
    width: {
      xs: 300,
      sm: 400,
    },
    height: "auto",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "90%", md: "40%" },
  },
  subtitle: {
    mt: 1,
    color: "text.secondary",
    fontStyle: "italic",
    letterSpacing: 2,
  },
};
export default styles;
