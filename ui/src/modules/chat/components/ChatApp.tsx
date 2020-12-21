import { FC } from 'react'

import Initializer from './Initializer'
import ChatRoom from './ChatRoom'

const ChatApp: FC = () => {

  return <>
    <Initializer />
    <ChatRoom />
  </>
}

export default ChatApp