import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user, { UserInitialState } from './user';
import chat, { ChatRoomInitialState } from './chat';

export interface RootState {
  user: UserInitialState;
  chat: ChatRoomInitialState;
}

//생성된 reducer Input
const rootReducer = (state: RootState, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({ user, chat });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
