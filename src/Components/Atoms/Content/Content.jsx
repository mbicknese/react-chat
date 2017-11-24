import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string.isRequired
}
const Content = ({ text }) => (
  <p>{text}</p>
)

Content.propTypes = propTypes
export default Content
