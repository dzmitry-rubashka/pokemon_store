import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "./routeNames";

import LoginPageContainer from "../pages/home/containers/loginPageContainer";
import RegistrationPageContainer from "../pages/registrationPage/containers/registrationPageContainer";
import PokemonsPageContainer from "../pages/pokemonsPage/containers/pokemonsPageContainer";
import PokemonDetailsPageContainer from "../pages/pokemonDetailsPage/containers/pokemonDetailsPageContainer";
import PersonalDataPageContainer from "../pages/personalDataPage/containers/personalDataPageContainer";
import CartPageContainer from "../pages/cartPage/containers/cartPageContainer";

import PrivateRoutes from "./privateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LoginPageContainer} />
      <Route path={ROUTES.SING_UP} component={RegistrationPageContainer} />
      <PrivateRoutes
        exact
        path={ROUTES.POKEMONS}
        component={PokemonsPageContainer}
      />
      <PrivateRoutes
        exact
        path={ROUTES.POKEMONS_DETAILS}
        component={PokemonDetailsPageContainer}
      />
      <PrivateRoutes path={ROUTES.CART} component={CartPageContainer} />
      <PrivateRoutes
        path={ROUTES.PERSONAL_DATA}
        component={PersonalDataPageContainer}
      />
      <Redirect path="*" to={ROUTES.HOME} />
    </Switch>
  );
};

export default Routes;
