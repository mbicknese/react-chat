import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  date: PropTypes.string.isRequired,
  relativeTo: PropTypes.string
}
const RelativeDate = ({ date, relativeTo = '' }) => (
  <div>{date}</div>
)

RelativeDate.propTypes = propTypes
export default RelativeDate
