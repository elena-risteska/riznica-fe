import "leaflet/dist/leaflet.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "../src/assets/theme.js";
import App from "./App.jsx";
import { UserProvider } from "./UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            "*::-webkit-scrollbar": {
              width: "10px",
              height: "10px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "10px",
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0",
            },
            "*": {
              scrollbarWidth: "thin",
              scrollbarColor: `${theme.palette.primary.main} #f0f0f0`, // firefox
            },
          }}
        />
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
