import 'rxjs'
import { socket } from '@/Chat'
import { createEpicMiddleware } from 'redux-observable'

const OWN_MESSAGE = 'react-chat/chat/OWN_MESSAGE'
const MESSAGE_DELIVERED = 'react-chat/chat/MESSAGE_DELIVERED'

// @TODO improve scalability (and use logic names 'byId', 'allIds', 'chats.messageIds')
const initialState = {
  messages: {},
  current: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OWN_MESSAGE:
      state.messages[action.payload.id] = action.payload
      state.current.push(action.payload.id)
      return { ...state }
    default:
      return state
  }
}

export const postOwnMessage = payload => ({ type: OWN_MESSAGE, payload })
export const messageDelivered = payload => ({ type: MESSAGE_DELIVERED, payload })

export const loadEpic = action$ =>
action$.ofType(OWN_MESSAGE)
  .mergeMap(action =>
    socket.emit('messageSend', action.payload)
    .map(response => messageDelivered(action.payload.id))
  )

export const epics = [
  createEpicMiddleware(loadEpic)
]
