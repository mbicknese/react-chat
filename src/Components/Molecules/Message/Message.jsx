import React from 'react'
import PropTypes from 'prop-types'
import { Content } from '@/Components/Atoms'

const propTypes = {
  data: PropTypes.object.isRequired
}
const Message = ({ data }) => (
  <article>
    <Content text={data.message} />
  </article>
)

Message.propTypes = propTypes
export default Message
