import { TextField } from "@material-ui/core";
import useStyles from "./TasksListFilterStyle";

const TasksListFilterView = ({handlerChangeSearchTerm}) => {
  const classes = useStyles();

  return (
  <div className={classes.root} >
    <TextField placeholder="Search by description or responsible" onChange={handlerChangeSearchTerm} />
  </div>
  );
}

export default TasksListFilterView;
