/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import RelativeDate from './RelativeDate'

it('renders "a minute ago" a minute ago', () => {
  const date = new Date()
  const relativeDate = shallow(<RelativeDate date={date} />)
  expect(relativeDate.text()).toEqual('a minute ago')
})
