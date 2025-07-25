export const styles = {
  errorIcon: {
    fontSize: 60,
    mb: 2,
  },
  reloadButton: {
    width: "20%",
    borderRadius: "1rem",
  },
  errorBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  chevrons: {
    color: "info.main",
    transition: "transform 0.2s ease, background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "info.dark",
      transform: "scale(1)",
    },
  },
};
