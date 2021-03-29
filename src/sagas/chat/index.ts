import { all, fork } from 'redux-saga/effects';
import watchRoomList from './roomList';

//user redux middleware
export default function* chatSaga() {
  yield all([fork(watchRoomList)]);
}
