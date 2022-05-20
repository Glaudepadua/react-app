import { TextField } from "@material-ui/core";
import useStyles from "./UsersListFilterStyle";

const UsersListFilterView = ({ handlerChangeSearchTerm }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField placeholder="Search by name or email" onChange={handlerChangeSearchTerm} />
    </div>
  );
};

export default UsersListFilterView;
