import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../../actions/index';
import { findUserData } from '../auth/auth';

const API_KEY = 'AIzaSyBLr1ONNd85NnItMz49UOWNk_JFGVkLQvQ';

const getUser = (state) => state.auth;

export function* updatePasswordSaga({ payload }) {
  try {
    yield put(actions.loadingStart());
    const user = yield select(getUser);
    const data = {
      idToken: user.token,
      password: payload.newPassword,
    };
    yield axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + API_KEY, data);
    yield put(actions.showAlert('SUCCESS','Password updated!'));
  } catch (err) {
    yield put(actions.showAlert('FAIL','Error changing password'));
  }
}

export function* updateUserInfoSaga({ payload }) {
  try {
    yield put(actions.loadingStart());
    const user = yield select(getUser);
    const userData = yield findUserData(user.userId);
    let userDbKey;
    for (const key in userData.data) {
      userDbKey = key;
    }
    yield axios.patch('https://pokerito-74c36.firebaseio.com/users/' + userDbKey + '.json', {
      username: payload.newUsername,
    });
    yield localStorage.setItem('username', payload.newUsername);
    yield put(actions.updateUser(payload.newUsername));
    yield put(actions.showAlert('SUCCESS','User updated!'));
  } catch (err) {
    yield put(actions.showAlert('FAIL','Error updating user'));
  }
}
