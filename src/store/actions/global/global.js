import * as actionTypes from './actionTypes';

export const loadingStart = () => {
  return {
    type: actionTypes.LOADING_START,
  };
};

export const actionSuccess = (message) => {
  return {
    type: actionTypes.ACTION_SUCCESS,
    payload: {
      message,
    },
  };
};

export const actionFail = (message) => {
  return {
    type: actionTypes.ACTION_FAIL,
    payload: {
      message,
    },
  };
};

export const showAlert = (status, message) => {
  return {
    type: actionTypes.SHOW_ALERT,
    payload: {
      status,
      message,
    },
  };
};

export const closeAlert = () => {
  return {
    type: actionTypes.CLOSE_ALERT,
  };
};

export const actionFormFail = (message) => {
  return {
    type: actionTypes.ACTION_FORM_FAIL,
    payload: {
      message,
    },
  };
};

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
