import { Switch, Route } from "react-router-dom";

const TasksRoutes = ({ match: { url } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${url}/`} component={() => <>Tasks Sub</>} />
      </Switch>
    </div>
  );
};

export default TasksRoutes;
