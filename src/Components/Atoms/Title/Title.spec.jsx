/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

it('renders the given text', () => {
  const text = 'Hello World!'
  const title = shallow(<Title text={text} />)
  expect(title.text()).toEqual(text)
})
