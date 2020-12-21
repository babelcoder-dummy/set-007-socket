import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'modules/reducers'
import type { ConnectionStatus } from 'modules/web-socket/slice'
import { connect } from 'modules/web-socket/slice'


const useWebSocket = () => {
  const dispatch = useDispatch()
  const connectionStatus = useSelector<RootState, ConnectionStatus>(state => state.webSocket.status)

  useEffect(() => {
    dispatch(connect())
  }, [dispatch])

  return connectionStatus
}

export default useWebSocket