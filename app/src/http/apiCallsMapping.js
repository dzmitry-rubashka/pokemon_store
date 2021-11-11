import * as loginPageActions from '../pages/home/actions';
import * as loginPageAPI from '../pages/home/api';

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
  };
  return mapping[action.type]
}

export default apiCallsMapping