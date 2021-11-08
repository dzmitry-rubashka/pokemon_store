import {Switch, Route, Redirect} from "react-router-dom";

import homePage from "../pages/home";

import {ROUTES} from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={homePage}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;