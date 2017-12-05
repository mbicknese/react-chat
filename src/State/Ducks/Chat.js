import 'rxjs'

const OWN_MESSAGE = 'react-chat/chat/OWN_MESSAGE'

const initialState = {
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OWN_MESSAGE:
      state.messages.push(action.payload)
      return { ...state }
    default:
      return state
  }
}

export const postOwnMessage = payload => ({ type: OWN_MESSAGE, payload })
