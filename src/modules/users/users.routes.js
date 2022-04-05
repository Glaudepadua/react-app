import { Switch, Route } from "react-router-dom";

const UsersRoutes = ({ match: { url } }) => {
  return (
    <div>
      <Switch>
        <Route path={`${url}/`} component={() => <>Users Sub</>} />
      </Switch>
    </div>
  );
};

export default UsersRoutes;
