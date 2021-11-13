import {ROUTES} from "../../Routes/routeNames";

export const NAV_TYPE_NAMES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
}

export const NAV_CONFIG = {
  [NAV_TYPE_NAMES.PUBLIC]: [
    {
      label: 'Home', //Home Page = Login Page. I just use word "Home"
      path: ROUTES.HOME,
    },
    {
      label: 'Sing Up',
      path: ROUTES.SING_UP,
    },
  ],

  [NAV_TYPE_NAMES.PRIVATE]: [
    {
      label: 'Home',
      path: ROUTES.HOME,
    },
    {
      label: 'Sing Up',
      path: ROUTES.SING_UP,
    },
    {
      label: 'Pokemons',
      path: ROUTES.POKEMONS,
    },
    {
      label: 'Pokemon Details',
      path: ROUTES.POKEMON_DETAILS,
    },
    {
      label: 'Cart',
      path: ROUTES.CART,
    },
    {
      label: 'Personal Data',
      path: ROUTES.PERSONAL_DATA,
    },
  ],
}

