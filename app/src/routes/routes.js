import {Switch, Route, Redirect} from "react-router-dom";

import {ROUTES} from "./routeNames";

import LoginPageContainer from "../pages/home/containers/loginPageContainer";
import RegistrationPageContainer from "../pages/registrationPage/containers/registrationPageContainer";
import PokemonsPageContainer from "../pages/pokemonsPage/containers/pokemonsPageContainer";
import PokemonDetailsPageContainer from "../pages/pokemonDetailsPage/containers/pokemonDetailsPageContainer";
import PrivateRoutes from "./privateRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LoginPageContainer}/>
      <Route path={ROUTES.SING_UP} component={RegistrationPageContainer}/>
      <PrivateRoutes exact path={ROUTES.POKEMONS} component={PokemonsPageContainer}/>
      <Route path={ROUTES.POKEMONS_DETAILS} component={PokemonDetailsPageContainer}/>
      <Route path={ROUTES.CART}/>
      <Route path={ROUTES.PERSONAL_DATA}/>
      <Redirect path='*' to={ROUTES.HOME}/>
    </Switch>
  );
};

export default Routes;


