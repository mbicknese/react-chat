/* eslint-env jest */
import React from 'react'
import Moment from 'moment'
import { shallow } from 'enzyme'
import RelativeDate from './RelativeDate'

it('renders "a minute ago" a minute ago', () => {
  const date = new Moment().subtract(0.8, 'minute').format()
  const relativeDate = shallow(<RelativeDate date={date} />)
  expect(relativeDate.text()).toEqual('a minute ago')
})
it('renders the date if long ago', () => {
  const date = new Moment().subtract(10, 'day').format()
  const relativeDate = shallow(<RelativeDate date={date} />)
  expect(relativeDate.text()).toEqual(date)
})
