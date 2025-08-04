import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/mulish";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFCC00",
    },
    secondary: {
      main: "#EB5B00",
    },
    info: {
      main: "#B12C00",
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
