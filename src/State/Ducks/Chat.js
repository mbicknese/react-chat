import { Observable } from 'rxjs'
import { socket } from '@/Chat'
import { createEpicMiddleware } from 'redux-observable'
import generateId from '@/UID'

const OWN_MESSAGE = 'react-chat/chat/OWN_MESSAGE'
const RECEIVE_MESSAGE = 'react-chat/chat/RECEIVE_MESSAGE'
const MESSAGE_DELIVERED = 'react-chat/chat/MESSAGE_DELIVERED'
const CONNECTED = 'react-chat/chat/CONNECTED'

// @TODO improve scalability (and use logic names 'byId', 'allIds', 'chats.messageIds')
const initialState = {
  messages: {},
  current: [],
  author: generateId()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONNECTED:
      return {
        ...state,
        author: action.payload
      }
    case RECEIVE_MESSAGE:
    case OWN_MESSAGE:
      if (!state.current.includes(action.payload.id)) {
        state.messages[action.payload.id] = action.payload
        state.current.push(action.payload.id)
      }
      return { ...state }
    default:
      return state
  }
}

export const postOwnMessage = payload => ({ type: OWN_MESSAGE, payload })
export const receiveMessage = payload => ({ type: RECEIVE_MESSAGE, payload })
export const connected = payload => ({ type: CONNECTED, payload })

const loadEpic = action$ =>
action$.ofType(OWN_MESSAGE)
  .map(action =>
    socket.emit('messageSend', action.payload)
  ).mapTo({ type: MESSAGE_DELIVERED })

const receiveEpic = action$ =>
Observable.create(observer => {
  socket.on('messageSend', message => { observer.next(receiveMessage(message)) })
})

export const epics = [
  createEpicMiddleware(loadEpic),
  createEpicMiddleware(receiveEpic)
]
