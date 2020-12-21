import { io, Socket } from 'socket.io-client'

let ws: Socket

export const connect = () => {
  ws = io(process.env.REACT_APP_WS_ENDPOINT!)
}

export const emit = (eventName: string, message: string) => {
  ws.emit(eventName, message)
}

export const subscribe = (eventName: string, callback: Function) => {
  ws.on(eventName, callback)
}

export const unsubscribe = (eventName: string) => {
  ws.off(eventName)
}

export const disconnect = () => {
  ws.close()
}