const styles = {
  fullScreen: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `repeating-radial-gradient(circle, #f3f4f6 0, #f3f4f6 2px, transparent 2px, transparent 12px) !important`,
    backgroundSize: "20px 20px",
  },
  photoBox: {
    display: { xs: "none", md: "flex" },
    width: {
      xs: 300,
      sm: 500,
      md: 600,
      lg: 400,
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
    width: "30%",
  },
  subtitle: {
    mt: 1,
    color: "text.secondary",
    fontStyle: "italic",
    letterSpacing: 2,
  },
};
export default styles;
