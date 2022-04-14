import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c52df",
      contrastText: "#fff"
    },
    secondary: {
      main: "#32CD32"
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary"
    }
  }
});

window["theme"] = theme;

export default theme;
