import React from 'react'
import PropTypes from 'prop-types'
import { Title, Content } from '@/Components/Atoms'

const propTypes = {
  data: PropTypes.object.isRequired
}
const Message = ({ data }) => (
  <article>
    <header>
      <Title text={data.title} />
    </header>
    <Content text={data.text} />
  </article>
)

Message.propTypes = propTypes
export default Message
