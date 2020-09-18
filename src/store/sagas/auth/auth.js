import { put } from 'redux-saga/effects';
import * as actions from '../../actions/index';
import axios from 'axios';

const API_KEY = 'AIzaSyBLr1ONNd85NnItMz49UOWNk_JFGVkLQvQ';

/**
 * persist user info into database, userId and username
 * @param {Object} data
 */
function* persistUser(data) {
  yield axios.post('https://pokerito-74c36.firebaseio.com/users.json', data);
}

/**
 * Save auth user session data in localstorage
 * @param {String} token
 * @param {String} userId
 * @param {String} username
 */
function* storeSessionData(token, userId, username, email) {
  yield localStorage.setItem('token', token);
  yield localStorage.setItem('userId', userId);
  yield localStorage.setItem('username', username);
  yield localStorage.setItem('email', email);
}

export function* signUpSaga({ payload }) {
  yield put(actions.loadingStart());
  const authData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };
  try {
    const response = yield axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
      authData
    );
    yield storeSessionData(response.data.idToken, response.data.localId, payload.name, payload.email);
    yield persistUser({ userId: response.data.localId, username: payload.name });
    yield put(actions.signupSuccess(response.data.idToken, response.data.localId, payload.name));
    yield put(actions.showAlert('SUCCESS', 'Signup successful')); // show alert with message
  } catch (err) {
    yield put(actions.actionFormFail(err.response.data.error.message));
  }
}

export function* findUserData(userId) {
  return yield axios.get('https://pokerito-74c36.firebaseio.com/users.json', {
    params: {
      orderBy: '"userId"',
      equalTo: `"${userId}"`,
    },
  });
}

export function* loginSaga({ payload }) {
  yield put(actions.loadingStart());
  const authData = {
    email: payload.email,
    password: payload.password,
    returnSecureToken: true,
  };
  try {
    const response = yield axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY,
      authData
    );
    const userData = yield findUserData(response.data.localId);
    let username = '';
    for (const key in userData.data) {
      username = userData.data[key].username;
    }
    yield storeSessionData(response.data.idToken, response.data.localId, username, payload.email);
    yield put(actions.loginSuccess(response.data.idToken, response.data.localId, username, payload.email));
    yield put(actions.showAlert('SUCCESS', 'Signed in'));
  } catch (err) {
    yield put(actions.actionFormFail('INVALID_CREDENTIALS'));
  }
}

export function* logoutSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('username');
  yield localStorage.removeItem('email');
  yield put(actions.logout());
}

export function* checkSessionSaga({ payload }) {
  if (!payload.isAuthenticated) {
    const token = yield localStorage.getItem('token');
    if (token) {
      const userId = yield localStorage.getItem('userId');
      const username = yield localStorage.getItem('username');
      const email = yield localStorage.getItem('email');
      yield put(actions.loginSuccess(token, userId, username, email));
    }
  }
}
