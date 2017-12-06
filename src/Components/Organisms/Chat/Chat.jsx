import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Message } from '@/Components/Molecules'

const propTypes = {
  data: PropTypes.object.isRequired,
  self: PropTypes.number
}

class Chat extends Component {
  renderMessages () {
    const ids = this.props.data.current

    return ids.slice(Math.max(ids.length - 10, 0)).map((id) => (
      <Message data={this.props.data.messages[id]} key={id} self={this.props.self} />
    ))
  }

  render () {
    return (
      <div className='mx-6 my-4'>
        {this.renderMessages()}
      </div>
    )
  }
}

Chat.propTypes = propTypes
export default Chat
