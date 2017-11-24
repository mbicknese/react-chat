/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'
import { Title, Content } from '@/Components/Atoms'

it('renders the given text', () => {
  const data = {
    title: 'New message',
    text: 'Hello World!'
  }
  const message = shallow(<Message data={data} />)
  expect(message.find(Title).length).toBe(1)
  expect(message.find(Content).length).toBe(1)
  expect(message.find(Title).prop('text')).toBe(data.title)
  expect(message.find(Content).prop('text')).toBe(data.text)
})
