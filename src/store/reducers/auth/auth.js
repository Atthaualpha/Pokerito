import * as actionTypes from '../../actions/actionTypes';
import { updatedState } from '../../../utils/utils';
const initialState = {
  isAuthenticated: false,
  token: '',
  userId: '',
  username: '',
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return updatedState(state, { ...payload, isAuthenticated: true });
    case actionTypes.LOGOUT:
      return initialState;
    case actionTypes.UPDATE_USER_INFO: {
      return updatedState(state, { ...payload });
    }
    default:
      return state;
  }
};
