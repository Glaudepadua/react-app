import { TextField } from "@material-ui/core";
import useStyles from "./UsersListFilterStyle";

const UsersListFilterView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField placeholder="Search by name or email" />
    </div>
  );
};

export default UsersListFilterView;
