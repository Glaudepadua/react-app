import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const DashboardRoutes = ({ match: { url } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${url}/`} component={Dashboard} />
      </Switch>
    </div>
  );
};

export default DashboardRoutes;
