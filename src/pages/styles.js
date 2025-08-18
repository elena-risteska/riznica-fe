const styles = {
  notFoundBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    px: { xs: 2, md: 0 },
  },
  backHome: {
    width: { xs: "80%", sm: "25%", lg: "15%" },
    borderRadius: "1rem",
  },
  loginLayout: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
    justifyContent: "space-between",
  },
  registerLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundImage:
      "repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 2px, transparent 2px, transparent 20px)",
    backgroundSize: "20px 20px",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mx: { xs: 1, sm: 0 },
    width: {
      xs: 400,
      md: 650,
      lg: 800,
    },
    height: {
      xs: 650,
      md: 650,
      lg: 800,
    },
    borderRadius: { xs: "20%", md: "50%" },
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    backgroundColor: "primary.main",
    animation: "pulse 2s infinite",
    "@keyframes pulse": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.02)" },
      "100%": { transform: "scale(1)" },
    },
  },
  cardsGrid: { display: "flex", justifyContent: "center", my: 8, px: 2 },
};

export default styles;
