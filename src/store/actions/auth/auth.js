import * as actionTypes from './actionTypes';

export const signupStart = (name, email, password) => {
  return {
    type: actionTypes.SIGN_UP_START,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const signupSuccess = (token, userId, username) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: {
      token,
      userId,
      username,
    },
  };
};

export const loginStart = (email, password) => {
  return {
    type: actionTypes.LOGIN_START,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (token, userId, username) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      token,
      userId,
      username,
    },
  };
};

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START
  }
}

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
}

export const checkSession = (isAuthenticated) => {
  return {
    type: actionTypes.CHECK_SESSION,
    payload: {
      isAuthenticated
    }    
  }
}
