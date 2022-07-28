import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import TaskDialog from "./TaskDialog";
import TasksListFilter from "./TasksListFilter";
import TasksListTable from "./TasksListTable";

const TasksListView = () => {
  const newButton = <Button>New</Button>;

  return (
    <>
      <PageHeader title="Tasks" actionButton={newButton} />
      <TasksListFilter />
      <TasksListTable />
      <TaskDialog />
    </>
  );
};

export default TasksListView;
