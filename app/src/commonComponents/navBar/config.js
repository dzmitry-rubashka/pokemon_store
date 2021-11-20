import {ROUTES} from "../../routes/routeNames";

export const NAV_TYPE_NAMES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
}

export const NAV_CONFIG = {
  [NAV_TYPE_NAMES.PUBLIC]: [
    // {
    //   label: 'Home', //Home Page = Login Page. I just use word "Home"
    //   path: ROUTES.HOME,
    // },
    // {
    //   label: 'Sing Up',
    //   path: ROUTES.SING_UP,
    // },
  ],

  [NAV_TYPE_NAMES.PRIVATE]: [
    // {
    //   label: 'Home',
    //   path: ROUTES.HOME,
    // },
    // {
    //   label: 'Sing Up',
    //   path: ROUTES.SING_UP,
    // },
    {
      label: 'Store',
      path: ROUTES.POKEMONS,
    },
    // {
    //   label: 'Pokemon Details',
    //   path: ROUTES.POKEMONS_DETAILS,
    // },
    {
      label: 'Cart',
      path: ROUTES.CART,
    },
    {
      label: 'Personal Information',
      path: ROUTES.PERSONAL_DATA,
    },
  ],
}

