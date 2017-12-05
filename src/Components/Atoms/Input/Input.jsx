import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createMessage } from '@/Chat'

const propTypes = {
  onSubmit: PropTypes.func
}

class Input extends Component {
  constructor () {
    super()
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleKeyDown (event) {
    if (event.keyCode === 24) {
      this.props.onSubmit(createMessage(this.state.value))
      this.setState({
        value: ''
      })
    }
  }

  render () {
    return (
      <input type='text' onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
    )
  }
}

Input.propTypes = propTypes
export default Input
