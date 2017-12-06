import { connect } from 'react-redux'
import { Author } from '@/Components/Atoms'

const mapStateToProps = state => ({
  name: state.chat.other
})

export default connect(
  mapStateToProps
)(Author)
