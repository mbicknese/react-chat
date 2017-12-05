import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input } from '@/Components/Atoms'
import { postOwnMessage } from '@/State/Ducks/Chat'

const bindDidpatchToProps = dispatch => ({
  onSubmit: bindActionCreators(postOwnMessage, dispatch)
})

export default connect(
  null,
  bindDidpatchToProps
)(Input)
