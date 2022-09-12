import { handleActions } from "redux-actions";
import * as actions from "../actions";

import * as cartActions from "../../cartPage/actions";

const defaultState = {
  isLoading: false,
  error: null,
  info: {},
};

const pokemonDetailsPageReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      info: payload.response,
      isLoading: false,
    }),

    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [cartActions.ADD_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [cartActions.ADD_POKEMON_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        customerId: payload.response.customerId,
        itemsList: payload.response.itemsList,
      };
    },
  },
  defaultState
);

export default pokemonDetailsPageReducer;
