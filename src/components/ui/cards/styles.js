export const styles = {
  photoCard: {
    width: "100%",
    height: "100%",
    maxWidth: 400,
    borderRadius: 3,
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    outline: "none",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: 6,
    },
    "&:focus": {
      boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.5)",
    },
  },
};
