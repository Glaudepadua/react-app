import { Switch, Route } from "react-router-dom";
import TasksList from "./TasksList";
import { TasksListContextProvider } from "./TasksList/context/TaskListContext";

const TasksRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <TasksListContextProvider>
        <Route path={`${url}/:status?`} component={TasksList} />
      </TasksListContextProvider>
    </Switch>
  );
};

export default TasksRoutes;
