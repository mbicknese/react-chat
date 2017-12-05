/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'
import { Content } from '@/Components/Atoms'

it('renders the given text', () => {
  const data = {
    title: 'New message',
    message: 'Hello World!'
  }
  const message = shallow(<Message data={data} />)
  expect(message.find(Content).length).toBe(1)
  expect(message.find(Content).prop('text')).toBe(data.message)
})
