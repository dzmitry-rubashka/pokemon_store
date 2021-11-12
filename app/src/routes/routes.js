import {Switch, Route, Redirect} from "react-router-dom";

import {ROUTES} from "./routeNames";

import LoginPageContainer from "../pages/home/containers/loginPageContainer";
import RegistrationPageContainer from "../pages/registrationPage/containers/registrationPageContainer";
import PokemonsPageContainer from "../pages/pokemonsPage/containers/pokemonsPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LoginPageContainer}/>
      <Route path={ROUTES.SING_UP} component={RegistrationPageContainer}/>
      <Route path={ROUTES.POKEMONS} component={PokemonsPageContainer}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;

