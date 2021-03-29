import axios from 'axios';
import { all, call } from 'redux-saga/effects';
import user from './user';
import chat from './chat';

//server url 제공 시 추가 (util config 경로)
//axios.defaults.baseURL = `${SERVER_URL}/api`;

//total middleware
export default function* rootSaga() {
  yield all([call(user), call(chat)]);
}
