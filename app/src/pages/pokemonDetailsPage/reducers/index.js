import {handleActions} from 'redux-actions';
import * as actions from '../actions';

const defaultState = {
  isLoading: false,
  error: null,
  info: {},
}

const pokemonDetailsPageReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, {payload}) => ({
      ...state,
      info: payload.response,
      isLoading: false,
    }),

    [actions.GET_POKEMON_DETAILS_FAIL]: (state, {payload}) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
  defaultState
)

export default pokemonDetailsPageReducer;