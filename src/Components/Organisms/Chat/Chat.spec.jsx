/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Chat from './Chat'
import { Message } from '@/Components/Molecules'

// @todo get a UUID lib in here
it('renders given messages', () => {
  const data = {
    messages: {
      '124-234-234': { text: 'Hi mate', title: '' }, // At this point I realize chat messages don't have titles
      '131-142-124': { text: 'I heard about your dog man!', title: '' },
      '124-223-125': { text: 'Hey dude', title: '' },
      '032-215-235': { text: "I'm unrelated!", title: '' }
    },
    current: ['124-234-234', '124-223-125', '131-142-124']
  }
  const chat = shallow(<Chat data={data} />)
  expect(chat.find(Message).length).toBe(3)
  expect(chat.find(Message).at(0).prop('data')).toBe(data.messages['124-234-234'])
  expect(chat.find(Message).at(2).prop('data')).toBe(data.messages['131-142-124'])
})
