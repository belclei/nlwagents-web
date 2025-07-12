import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}
export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId || params.roomId === '') {
    return <Navigate replace to="/" />
  }

  return <h1>Room Details - {params.roomId}</h1>
}
