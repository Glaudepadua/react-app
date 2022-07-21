import { useContext } from "react";
import { SnackbarContext } from "_common/components/Snackbar/context/SnackbarContext";

export default function useSnackbar() {
  const { setSnackbarState } = useContext(SnackbarContext);

  const snackbar = (message) => setSnackbarState({ open: true, message });

  const snackbarSuccess = (message = "Operation performed successfully!") => setSnackbarState({ open: true, message });

  const snackbarError = (message = "Oops! An error has occurred, please try again") => setSnackbarState({ open: true, message });

  return { snackbar, snackbarSuccess, snackbarError };
}
