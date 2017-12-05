import 'rxjs'

const OWN_MESSAGE = 'react-chat/chat/OWN_MESSAGE'

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
