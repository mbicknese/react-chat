import { connect } from 'react-redux'
import { Chat } from '@/Components/Organisms'

const bindStateToProps = state => ({
  data: state.chat
})

export default connect(
  bindStateToProps
)(Chat)
