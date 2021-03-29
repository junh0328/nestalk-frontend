import { RoomListData } from '@src/types/chatting';

//CHATROOM request reducer
export const LOAD_CHATTING_LIST_REQUEST = 'LOAD_CHATTING_LIST_REQUEST' as const;
export const LOAD_CHATTING_LIST_SUCCESS = 'LOAD_CHATTING_LIST_SUCCESS' as const;
export const LOAD_CHATTING_LIST_FAILURE = 'LOAD_CHATTING_LIST_FAILURE' as const;

export interface RoomListRequest {
  type: typeof LOAD_CHATTING_LIST_REQUEST;
  data: number;
}

export interface RoomListSuccess {
  type: typeof LOAD_CHATTING_LIST_SUCCESS;
  data: RoomListData;
}

export interface RoomListFailure {
  type: typeof LOAD_CHATTING_LIST_FAILURE;
  error: string;
}

//roomListRequest
export const roomListRequest = (data: number): RoomListRequest => ({
  type: LOAD_CHATTING_LIST_REQUEST,
  data,
});

//roomListSuccess
export const roomListSuccess = (data: RoomListData): RoomListSuccess => ({
  type: LOAD_CHATTING_LIST_SUCCESS,
  data,
});

//roomListFailure
export const roomListFailure = (error: string): RoomListFailure => ({
  type: LOAD_CHATTING_LIST_FAILURE,
  error,
});

//RomeList type
export type RoomList =
  | ReturnType<typeof roomListRequest>
  | ReturnType<typeof roomListSuccess>
  | ReturnType<typeof roomListFailure>;
