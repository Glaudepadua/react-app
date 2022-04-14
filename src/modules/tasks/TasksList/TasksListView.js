import Button from "@mui/material/Button";
import PageHeader from "_common/components/PageHeader";

const TasksListView = () => {
  const newButton = <Button>New</Button>;

  return (
    <>
      <PageHeader title="Tasks" actionButton={newButton} />
    </>
  );
};

export default TasksListView;
