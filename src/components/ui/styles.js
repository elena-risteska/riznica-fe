const styles = {
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  backButton: {
    position: "fixed",
    top: 16,
    left: 16,
    zIndex: 1000,
    width: "auto",
  },
};

const search = (sx = {}) => ({
  backgroundColor: "#B12C00",
  borderRadius: "999px",
  input: {
    color: "white",
    padding: "12px",
  },
  "& .MuiFilledInput-root": {
    borderRadius: "999px",
    backgroundColor: "#B12C00",
  },
  "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after": {
    display: "none",
  },
  ...sx,
});

export { styles, search };
