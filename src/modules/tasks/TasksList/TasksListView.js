import Button from "@material-ui/core/Button";
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
