import { call, put, takeLatest } from 'redux-saga/effects'

import { getRandomImageApi } from '../../api/image';
import {
  GET_RANDOM_IMAGE,
  GET_RANDOM_IMAGE_SUCCESS,
  GET_RANDOM_IMAGE_FAILURE,
} from '../actions/image';

export function* getRandomImage() {
   try {
      const payload = yield call(getRandomImageApi);
      yield put({type: GET_RANDOM_IMAGE_SUCCESS, payload});
   } catch (e) {
      yield put({type: GET_RANDOM_IMAGE_FAILURE, message: e.message});
   }
}

export function* imageSaga() {
  yield takeLatest(GET_RANDOM_IMAGE, getRandomImage);
}
