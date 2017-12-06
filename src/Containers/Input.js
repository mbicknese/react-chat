import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input } from '@/Components/Atoms'
import { postOwnMessage } from '@/State/Ducks/Chat'

const bindStateToProps = state => ({
  author: state.chat.author
})
const bindDidpatchToProps = dispatch => ({
  onSubmit: bindActionCreators(postOwnMessage, dispatch)
})

export default connect(
  bindStateToProps,
  bindDidpatchToProps
)(Input)
