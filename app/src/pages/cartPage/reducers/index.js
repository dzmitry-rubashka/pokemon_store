import {handleActions} from 'redux-actions';

import * as actions from '../actions';

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  // customerId: null, //???????????
  isLoading: false,
  error: null,
}

const cartPageReducer = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_CART_SUCCESS]: (state, {payload}) => {

      console.log(payload.response)

      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        // customerId: payload.response.customerId,
        itemsList: payload.response.itemsList,
      }
    },

    [actions.GET_CART_FAIL]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.ADD_POKEMON_SUCCESS]: (state, {payload}) => {

      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        quantity: payload.response.quantity,
        // customerId: payload.response.customerId,
        itemList: payload.response.itemList,
      }
    },

    [actions.ADD_POKEMON_FAIL]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.CHANGE_QUANTITY_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.CHANGE_QUANTITY_SUCCESS]: (state, {payload}) => {

      const {cartState, itemWithNewQuantity} = payload.response; /// ???????
      const stateCopy = [...state.itemsList];
      const itemIndexToChange = stateCopy.findIndex((item) => item.id === itemWithNewQuantity.id); //or customerId ?
      stateCopy.splice(itemIndexToChange, 1, itemWithNewQuantity)

      return {
        ...state,
        isLoading: false,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
        // customerId: payload.response.customerId,
        itemList: stateCopy,
      }
    },

    [actions.CHANGE_QUANTITY_FAIL]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.DELETE_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.DELETE_POKEMON_SUCCESS]: (state, {payload}) => {

      const {cartState, removedItem} = payload.response; /// ???????
      const stateCopy = [...state.itemsList];
      const itemIndexToRemove = stateCopy.findIndex((item) => item.id === removedItem); //or customerId ?
      stateCopy.splice(itemIndexToRemove, 1)

      return {
        ...state,
        isLoading: false,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
        // customerId: payload.response.customerId,
        itemList: stateCopy,
      }
    },

    [actions.DELETE_POKEMON_FAIL]: (state, {payload}) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
)

export default cartPageReducer;