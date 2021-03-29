import { CreateRoomData } from '@src/types/chatting';

//CHATROOM request reducer
export const CHATTING_ROOM_ADD_REQUEST = 'CHATTING_ROOM_ADD_REQUEST' as const;
export const CHATTING_ROOM_ADD_SUCCESS = 'CHATTING_ROOM_ADD_SUCCESS' as const;
export const CHATTING_ROOM_ADD_FAILURE = 'CHATTING_ROOM_ADD_FAILURE' as const;

export interface RoomAddRequest {
  type: typeof CHATTING_ROOM_ADD_REQUEST;
  data: CreateRoomData;
}

export interface RoomAddSuccess {
  type: typeof CHATTING_ROOM_ADD_SUCCESS;
}

export interface RoomAddFailure {
  type: typeof CHATTING_ROOM_ADD_FAILURE;
  error: string;
}

//roomListRequest
export const roomAddRequest = (data: CreateRoomData): RoomAddRequest => ({
  type: CHATTING_ROOM_ADD_REQUEST,
  data,
});

//roomListSuccess
export const roomAddSuccess = (): RoomAddSuccess => ({
  type: CHATTING_ROOM_ADD_SUCCESS,
});

//roomListFailure
export const roomAddFailure = (error: string): RoomAddFailure => ({
  type: CHATTING_ROOM_ADD_FAILURE,
  error,
});

//RomeList type
export type RoomAdd =
  | ReturnType<typeof roomAddRequest>
  | ReturnType<typeof roomAddSuccess>
  | ReturnType<typeof roomAddFailure>;
