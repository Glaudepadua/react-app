import { Switch, Route } from "react-router-dom";
import UsersList from "./UsersList";

const UsersRoutes = ({ match: { url } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${url}/`} component={UsersList} />
      </Switch>
    </div>
  );
};

export default UsersRoutes;
