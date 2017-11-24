import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired
}
const Author = ({ name }) => (
  <div>{name}</div>
)

Author.propTypes = propTypes
export default Author
