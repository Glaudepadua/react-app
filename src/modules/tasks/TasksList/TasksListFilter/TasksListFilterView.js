import { TextField } from "@material-ui/core";
import useStyles from "./TasksListFilterStyle";

const TasksListFilterView = () => {
  const classes = useStyles();

  return (
  <div className={classes.root} >
    <TextField placeholder="Search by description or responsible" />
  </div>
  );
}

export default TasksListFilterView;
