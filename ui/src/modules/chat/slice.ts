import {  createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from 'modules/reducers'
import * as ws from 'lib/web-socket'

export type ChatMessage = {
  text: string
}

type ChatState = {
  messages: ChatMessage[]
}

const initialState: ChatState = {
  messages: []
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload)
    }
  }
})

export const { addMessage } = chatSlice.actions

export const pollMessages = (): AppThunk => async dispatch => {
  ws.subscribe('chat message', (message: ChatMessage) => dispatch(addMessage(message)))
}

export const disableMessages = (): AppThunk => () => ws.unsubscribe('chat message')

export const sendMessage = (message: ChatMessage['text']): AppThunk => () => {
  ws.emit('chat message', message)
}

export default chatSlice.reducer