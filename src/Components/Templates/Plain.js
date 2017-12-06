import React from 'react'

const Plain = ({ children }) => (
  <div className='absolute pin-b pin-t w-full' style={{paddingTop: '4rem'}}>
    {children}
  </div>
)

export default Plain
