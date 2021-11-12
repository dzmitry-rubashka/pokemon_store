import * as loginPageActions from '../pages/home/actions';
import * as loginPageAPI from '../pages/home/api';

import * as signUpPageActions from '../pages/registrationPage/actions';
import * as signUpPageAPI from '../pages/registrationPage/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,

    [signUpPageActions.SIGN_UP_REQUEST]: signUpPageAPI.signUp,
  };
  return mapping[action.type]
}

export default apiCallsMapping