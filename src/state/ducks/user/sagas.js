/* eslint-disable import/prefer-default-export */
import {
  takeEvery, all, put,
} from 'redux-saga/effects';
import { BUTTON_CLICK, SET_VALUE, SET_WALLET_ADDRESS } from './types';

function* buttonClick() {
  yield put({ type: SET_VALUE, payload: true });
}

function* authUser() {
  yield put({ type: SET_VALUE, payload: true });
}

function* watchButtonClick() {
  yield takeEvery(BUTTON_CLICK, buttonClick);
}

function* watchAuthUser() {
  yield takeEvery(SET_WALLET_ADDRESS, authUser);
}

export function* combinedSaga() {
  yield all([
    watchButtonClick(),
    watchAuthUser(),
  ]);
}
