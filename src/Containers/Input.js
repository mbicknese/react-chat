import { connect } from 'react-redux'
import { Input } from '@/Components/Atoms'
import { postOwnMessage } from '@/State/Ducks/Chat'
import * as commandHandlers from '@/Chat/CommandHandlers'

const bindStateToProps = state => ({
  author: state.chat.author
})
const bindDidpatchToProps = dispatch => ({
  onSubmit: payload => {
    const messageWords = payload.message.split(' ')
    const cmd = { command: messageWords[0], argument: messageWords.slice(1).join(' '), author: payload.author }
    for (const i in commandHandlers) {
      if (commandHandlers[i].canHandle(cmd)) {
        return commandHandlers[i].handle(cmd)
      }
    }
    dispatch(postOwnMessage(payload))
  }
})

export default connect(
  bindStateToProps,
  bindDidpatchToProps
)(Input)
