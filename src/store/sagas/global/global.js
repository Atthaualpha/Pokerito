import { delay, put } from 'redux-saga/effects';
import * as actions from '../../actions/index';

function* timeoutAlert() {
  yield delay(3000);
  yield put(actions.closeAlert());
}

export function* showAlertSaga({ payload }) {
  if (payload.status === 'SUCCESS') {
    yield put(actions.actionSuccess(payload.message));
  } else {
    yield put(actions.actionFail(payload.message));
  }
  yield timeoutAlert();
}
