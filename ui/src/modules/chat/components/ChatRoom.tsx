import { ChangeEvent, FC, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'modules/reducers'
import type { ChatMessage } from 'modules/chat/slice'
import * as actions from 'modules/chat/slice'


const ChatRoom: FC = () => {
  const dispatch = useDispatch()
  const messages = useSelector<RootState, ChatMessage[]>(state => state.chat.messages)
  const [newMessage, setNewMessage] = useState<ChatMessage['text']>('')
  const [subscribed, setSubscribed] = useState<boolean>(false)

  const changeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value)
  }

  const sendMessage = useCallback(() => {
    dispatch(actions.sendMessage(newMessage))
    setNewMessage('')
  }, [dispatch, newMessage])

  const connect = useCallback(() => {
    dispatch(actions.pollMessages())
    setSubscribed(true)
  }, [dispatch])

  const disconnect = useCallback(() => {
    dispatch(actions.disableMessages())
    setSubscribed(false)
  }, [dispatch])

  useEffect(() => {
    connect()
  }, [connect])

  return <>
    <ul>
      {
        messages.map((message, index) => <li key={index}>{message.text}</li>)
      }
    </ul>
    <input type="text" placeholder="New Message" onChange={changeMessage} value={newMessage}/>
    <button onClick={sendMessage}>Send</button>
    <button onClick={subscribed ? disconnect : connect}>Toggle subscribe</button>
  </>
}

export default ChatRoom
