import { Action, combineReducers } from 'redux'
import { ThunkAction } from '@reduxjs/toolkit';

import chat from 'modules/chat/slice'
import webSocket from 'modules/web-socket/slice'

const rootReducer = combineReducers({
  chat,
  webSocket
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>