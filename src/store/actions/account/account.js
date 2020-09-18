import * as actionTypes from './actionTypes';

export const updatePassword = (newPassword) => {
  return {
    type: actionTypes.UPDATE_PASSWORD,
    payload: {
      newPassword,
    },
  };
};

export const updateUserStart = (newUsername) => {
    return {
        type: actionTypes.UPDATE_USER_INFO_START,
        payload: {
            newUsername
        }
    }
}

export const updateUser = (username) => {
    return {
        type: actionTypes.UPDATE_USER_INFO,
        payload: {
            username
        }
    }
}
