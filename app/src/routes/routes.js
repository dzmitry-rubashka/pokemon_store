import {Switch, Route, Redirect} from "react-router-dom";

import homePage from "../pages/home";

import {ROUTES} from "./routeNames";
import LoginPageContainer from "../pages/home/containers/loginPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LoginPageContainer}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;