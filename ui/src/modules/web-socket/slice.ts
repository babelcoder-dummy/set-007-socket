import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as socket from 'lib/web-socket'
import { AppThunk } from 'modules/reducers'

export type ConnectionStatus = 'Connecting' | 'Connected' | 'Disconnected'

type WebSocketState = {
  status: ConnectionStatus
}

const initialState: WebSocketState = {
  status: 'Disconnected',
}

const webSockerSlice = createSlice({
  name: 'web-socket',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<ConnectionStatus>) {
      state.status = action.payload
    }
  }
})

export const { setStatus } = webSockerSlice.actions

export const connect = (): AppThunk => async dispatch => {
  dispatch(setStatus('Connecting'))
  socket.connect()
  dispatch(setStatus('Connected'))
}

export const disconnect = (): AppThunk => async dispatch => {
  socket.disconnect()
  dispatch(setStatus('Disconnected'))
}

export default webSockerSlice.reducer