import React from 'react'
import PropTypes from 'prop-types'
import { Author, RelativeDate, Content } from '@/Components/Atoms'

const propTypes = {
  data: PropTypes.object.isRequired
}

// @TODO retrieve author name from state
const Message = ({ data }) => (
  <article className='bg-blue-lightest float-right clearfix p-4'>
    <header className='mb-2'>
      <div style={{ display: 'none' }}><Author name={data.author.toString()} /></div>
      <div className='text-grey'><RelativeDate date={data.timestamp} /></div>
    </header>
    <Content text={data.message} />
  </article>
)

Message.propTypes = propTypes
export default Message
