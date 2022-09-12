import { handleActions } from "redux-actions";

import * as actions from "../actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

const defaultState = {
  isLoading: false,
  info: {},
  isRegistered: false,
  error: null,
};

const registrationReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload.response;

      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        info: userInfo,
        isRegistered: true,
        error: null,
      };
    },

    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default registrationReducer;
