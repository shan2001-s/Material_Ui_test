import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { Typography } from "@mui/material";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#039be5",
      main: "#757575",
      dark: "#424242",
      contrastText: "white"
    }
  },
  typography: {
    myTypography: {
      fontSize: "6rem",
      fontWeight: 500,
      color: " red"
    }
  }
});

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
