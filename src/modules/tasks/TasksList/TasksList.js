import { useContext } from "react";
import { TasksListContext } from "./context/TaskListContext";
import TasksListView from "./TasksListView";

const TasksList = () => {
  const { taskDialog, setTaskDialog } = useContext(TasksListContext);

  const handleNew = () => setTaskDialog({ open: true });

  return <TasksListView {...{ taskDialog, handleNew }} />;
};

export default TasksList;
