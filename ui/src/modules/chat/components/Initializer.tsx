import { FC } from 'react'


import useWebSocket from '../hooks/useWebSocket'

const Initializer: FC = () => {
  const connectionStatus = useWebSocket()

  return <div>
    <div>Status: {connectionStatus}</div>
  </div>
}

export default Initializer