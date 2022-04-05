import { Switch, Route } from "react-router-dom";

const DashboardRoutes = ({ match: { url } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${url}/`} component={() => <>Dashboard Sub</>} />
      </Switch>
    </div>
  );
};

export default DashboardRoutes;
