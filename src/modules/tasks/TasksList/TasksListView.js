import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import TaskDialog from "./TaskDialog";
import TasksListFilter from "./TasksListFilter";
import TasksListTable from "./TasksListTable";

const TasksListView = ({ taskDialog, handleNew }) => {
  const newButton = <Button onClick={handleNew}>New</Button>;

  return (
    <>
      <PageHeader title="Tasks" actionButton={newButton} />
      <TasksListFilter />
      <TasksListTable />
      {taskDialog.open && <TaskDialog />}
    </>
  );
};

export default TasksListView;
