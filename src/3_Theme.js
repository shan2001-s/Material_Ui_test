import "./styles.css";
import {
  Button,
  Stack,
  theme,
  ThemeProvider,
  createTheme,
  Typography,
  CssBaseline
} from "@mui/material";
import { orange, blue } from "@mui/material/colors";

export default function App3() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: orange[500]
      },
      info: {
        main: blue[500],
        superdark: blue[800],
        superlight: blue[100]
      }
    },
    typography: {
      fontSize: 14,
      myfont: {
        fontSize: 28
      }
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline /> */}
      <div className="App2">
        <Typography variant="myfont">Hello World</Typography>
        <Typography variant="body1" color="primary">
          Because most of the time I want --ignore-platform-reqs, but still I
          can use composer_orig each time I see
        </Typography>

        <Button variant="contained" color="primary">
          btn-1
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "info.main",
            "&:hover": {
              backgroundColor: "info.superdark",
              opacity: [0.9, 0.8, 0.7]
            }
          }}
        >
          btn-2
        </Button>
      </div>
    </ThemeProvider>
  );
}
