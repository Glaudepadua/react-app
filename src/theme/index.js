import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000cd",
      contrastText: "#fff"
    },
    secondary: {
      main: "#4cb048"
    }
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary"
    },
    MuiTextField: {
      variant: "outlined",
      fullWidth: true
    }
  }
});

window["theme"] = theme;

export default theme;
