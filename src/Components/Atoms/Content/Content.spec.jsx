/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Content from './Content'

it('renders the given text', () => {
  const text = 'Hello World!'
  const content = shallow(<Content text={text} />)
  expect(content.text()).toEqual(text)
})
