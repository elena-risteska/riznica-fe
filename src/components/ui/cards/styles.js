const styles = {
  photoCard: {
    width: "100%",
    height: "100%",
    maxWidth: 600,
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
  skeleton: {
    height: "200px",
    width: "100%",
  },
  user: {
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-block",
    fontSize: { xs: "1rem", sm: "1.1rem" },
  },
};

const photoStyle = (imgLoaded) => ({
  width: "100%",
  height: "auto",
  maxHeight: 200,
  objectFit: "cover",
  display: imgLoaded ? "block" : "none",
});

const commentStyle = (loading) => ({
  border: 3,
  borderColor: "info.main",
  borderRadius: 3,
  p: { xs: 1.5, sm: 2 },
  my: 1,
  display: "flex",
  flex: 1,
  flexDirection: { xs: "column", sm: "row" },
  height: "100%",
  alignItems: "flex-start",
  cursor: loading ? "default" : "pointer",
  userSelect: "none",
  transition: "all 0.2s ease-in-out",
  transform: loading ? "none" : "scale(1)",
  "&:hover": loading
    ? {}
    : {
        boxShadow: 6,
        backgroundColor: "info.lighter",
        transform: "scale(1.01)",
      },
});

const avatarStyle = (loading) => ({
  minWidth: 56,
  mr: { sm: 2, xs: 0 },
  mb: { xs: 1, sm: 0 },
  alignSelf: { xs: "center", sm: "flex-start" },
  cursor: loading ? "default" : "pointer",
});
export { styles, photoStyle, commentStyle, avatarStyle };
