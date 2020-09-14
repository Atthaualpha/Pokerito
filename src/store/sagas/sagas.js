import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import * as authSaga from './auth/auth';
import * as globalSaga from './global/global';

function* watchAuth() {
  yield takeEvery(actionTypes.SIGN_UP_START, authSaga.signUpSaga);
  yield takeEvery(actionTypes.LOGIN_START, authSaga.loginSaga);
  yield takeEvery(actionTypes.LOGOUT_START, authSaga.logoutSaga);
  yield takeEvery(actionTypes.CHECK_SESSION, authSaga.checkSessionSaga);
}

function* watchGlobal() {
  yield takeEvery(actionTypes.SHOW_ALERT, globalSaga.showAlertSaga);
}

export default function* rootSaga() {
  yield all([watchAuth(), watchGlobal()]);
}
