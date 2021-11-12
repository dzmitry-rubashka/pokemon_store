import * as loginPageActions from '../pages/home/actions';
import * as loginPageAPI from '../pages/home/api';

import * as signUpPageActions from '../pages/registrationPage/actions';
import * as signUpPageAPI from '../pages/registrationPage/api';

import * as pokemonsPageActions from '../pages/pokemonsPage/actions'
import * as pokemonsPageAPI from '../pages/pokemonsPage/api'

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,

    [signUpPageActions.SIGN_UP_REQUEST]: signUpPageAPI.signUp,

    [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageAPI.getPokemons,
  };
  return mapping[action.type]
}

export default apiCallsMapping