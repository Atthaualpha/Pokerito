import * as actionTypes from '../../actions/actionTypes';
import { updatedState } from '../../../utils/utils';
const initialState = {
  loading: false,
  showAlert: false,
  severity: '',
  alertMessage: '',
  modalStatus: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOADING_START:
      return updatedState(state, { loading: true, showAlert: false });
    case actionTypes.ACTION_SUCCESS:
      return updatedState(state, {
        loading: false,
        showAlert: true,
        severity: 'success',
        alertMessage: payload.message,
      });
    case actionTypes.ACTION_FAIL:
      return updatedState(state, {
        loading: false,
        showAlert: true,
        severity: 'error',
        alertMessage: payload.message,
      });
    case actionTypes.ACTION_FORM_FAIL:
      return updatedState(state, {
        loading: false,
        alertMessage: payload.message,
      });
    case actionTypes.CLOSE_ALERT:
      return updatedState(state, {
        showAlert: false,
        severity: '',
        alertMessage: '',
      });   
    default:
      return state;
  }
};
