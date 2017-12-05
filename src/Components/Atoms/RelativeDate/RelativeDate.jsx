import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

const propTypes = {
  date: PropTypes.string.isRequired,
  relativeTo: PropTypes.string
}
class RelativeDate extends Component {
  constructor () {
    super()
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    const interval = setInterval(this.tick, 30000)
    this.setState({ interval })
  }

  componentWillUnmount () {
    clearInterval(this.state.interval)
  }

  tick () {
    this.forceUpdate()
  }

  renderDate (dateString) {
    const date = new Moment(dateString)
    if (date.isSame(new Date(), 'week')) {
      return Moment(date).startOf('minute').fromNow()
    }
    return dateString // .format('LLL')
  }

  render () {
    const { date, relativeTo = '' } = this.props
    return (
      <div>{this.renderDate(date)}</div>
    )
  }
}

RelativeDate.propTypes = propTypes
export default RelativeDate
