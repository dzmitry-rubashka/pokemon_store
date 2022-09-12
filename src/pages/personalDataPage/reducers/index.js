import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  totalPrice: 0,
  itemsList: [],
  customerId: "null",
  isLoading: false,
  error: null,
};

const personalDataPageReducer = handleActions(
  {
    [actions.ADD_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.ADD_ORDER_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        totalPrice: payload.response.totalPrice,
        itemsList: payload.response.itemsList,
        customerId: payload.response.customerId,
      };
    },

    [actions.ADD_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    [actions.GET_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_ORDER_SUCCESS]: (state, { payload }) => {
      // const data = payload.response.map(order => ({
      //   ...order,
      //   createdAt: moment(order.createdAt).format('DD.MM.YYYY'),
      // }))
      return {
        ...state,
        isLoading: false,
        ordersList: payload.response,
      };
    },

    [actions.GET_ORDER_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default personalDataPageReducer;
