import { connect } from 'react-redux'
import { Input } from '@/Components/Atoms'
import { postOwnMessage } from '@/State/Ducks/Chat'
import * as commandHandlers from '@/Chat/CommandHandlers'

const bindStateToProps = state => ({
  author: state.chat.author
})
const bindDidpatchToProps = dispatch => ({
  onSubmit: payload => {
    const cmdText = payload.message.split(' ')[0]
    console.log(commandHandlers)
    for (const i in commandHandlers) {
      if (commandHandlers[i].canHandle(cmdText)) {
        return commandHandlers[i].handle({
          author: payload.author,
          argument: payload.message.split(' ').slice(1).join(' ')
        })
      }
    }
    dispatch(postOwnMessage(payload))
  }
})

export default connect(
  bindStateToProps,
  bindDidpatchToProps
)(Input)
