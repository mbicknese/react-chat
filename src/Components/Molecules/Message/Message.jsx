import React from 'react'
import PropTypes from 'prop-types'
import { Author, RelativeDate, Content } from '@/Components/Atoms'

const propTypes = {
  data: PropTypes.object.isRequired,
  self: PropTypes.number
}

// @TODO retrieve author name from state
const Message = ({ data, self }) => {
  let className = 'p-4 mb-4 max-w-md' +
    (self === data.author ? ' bg-blue-lightest float-right' : ' bg-orange-lightest float-left')

  return (
    <article className={className} style={{ clear: 'both' }}>
      <header className='mb-2'>
        {data.author && <div style={{ display: 'none' }}><Author name={data.author.toString()} /></div>}
        <div className='text-grey'><RelativeDate date={data.timestamp} /></div>
      </header>
      <Content text={data.message} />
    </article>
  )
}

Message.propTypes = propTypes
export default Message
