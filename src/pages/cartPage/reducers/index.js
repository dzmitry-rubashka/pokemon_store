import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  isLoading: false,
  error: null,
};

const cartPageReducer = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_CART_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        customerId: payload.response.customerId,
        itemsList: payload.response.itemsList,
      };
    },

    [actions.GET_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.ADD_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.ADD_POKEMON_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        itemsList: payload.response.itemsList,
      };
    },

    [actions.ADD_POKEMON_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.CHANGE_QUANTITY_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.CHANGE_QUANTITY_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response; /// ???????
      const stateCopy = [...state.itemsList];
      const itemIndexToChange = stateCopy.findIndex(
        (item) => item.id === updatedItem.id
      ); //or customerId ?
      stateCopy.splice(itemIndexToChange, 1, updatedItem);

      return {
        ...state,
        isLoading: false,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
        itemsList: stateCopy,
      };
    },

    [actions.CHANGE_QUANTITY_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.DELETE_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.DELETE_POKEMON_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response; /// ???????
      const stateCopy = [...state.itemsList];
      const itemIndexToRemove = stateCopy.findIndex(
        (item) => item.id === removedItemId
      ); //or customerId ?
      stateCopy.splice(itemIndexToRemove, 1);

      return {
        ...state,
        isLoading: false,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
        // customerId: payload.response.customerId,
        itemsList: stateCopy,
      };
    },

    [actions.DELETE_POKEMON_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response.response,
    }),

    [actions.CLEAR_CART]: (state) => ({
      ...state,
      isLoading: false,
      itemsList: [],
      totalPrice: 0,
      quantity: 0,
    }),
  },
  defaultState
);

export default cartPageReducer;
