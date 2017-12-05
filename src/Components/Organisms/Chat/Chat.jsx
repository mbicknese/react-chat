import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Message } from '@/Components/Molecules'

const propTypes = {
  data: PropTypes.object.isRequired
}

class Chat extends Component {
  renderMessages () {
    return this.props.data.current.map((id) => (
      <Message data={this.props.data.messages[id]} key={id} />
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
