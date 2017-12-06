import { connect } from 'react-redux'
import { Chat } from '@/Components/Organisms'

const bindStateToProps = state => ({
  data: state.chat,
  self: state.chat.author
})

export default connect(
  bindStateToProps
)(Chat)
