/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Author from './Author'

it('renders the given text', () => {
  const name = 'Anon'
  const author = shallow(<Author name={name} />)
  expect(author.text()).toEqual(name)
})
