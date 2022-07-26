import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EmptyBox from "_common/lotties/EmptyBox";
import LoadingSpinner from "_common/lotties/LoadingSpinner";
import useStyles from "./TasksListTableStyle";

const TasksListTableView = ({tasks}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Responsible</TableCell>
              <TableCell width="150px" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task) => (
                <TableRow key={task._id} hover>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.responsible.name}</TableCell>
                  <TableCell padding="none" align="right"></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!tasks && <LoadingSpinner />}
      {tasks && !tasks.length && <EmptyBox />}
    </>
  );
};

export default TasksListTableView;
