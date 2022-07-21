import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const UserDialogView = ({ form, handleOnClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog fullWidth maxWidth="xs" open onClose={handleOnClose} {...{ fullScreen }}>
      <DialogTitle>{form.values._id ? "Edit" : "New"} User</DialogTitle>
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <DialogContent dividers>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Name"
                name="name"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
                error={form.touched.name && !!form.errors.name}
                helperText={form.touched.name && form.errors.name}
              />
            </Grid>
            <Grid item>
              <TextField
                label="E-mail"
                name="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
                error={form.touched.email && !!form.errors.email}
                helperText={form.touched.email && form.errors.email}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.password}
                error={form.touched.password && !!form.errors.password}
                helperText={form.touched.password && form.errors.password}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={handleOnClose}>
            Cancel
          </Button>
          <Button autoFocus type="submit" disabled={form.isSubmitting}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserDialogView;
