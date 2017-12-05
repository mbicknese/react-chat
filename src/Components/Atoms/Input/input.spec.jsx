/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

it('Accept text and notifies parents', () => {
  const msg = 'Hello World!'
  const onSubmit = jest.fn()
  const input = shallow(<Input onSubmit={onSubmit} />)
  const inputEl = input.find('input')
  inputEl.simulate('focus')
  inputEl.simulate('change', { target: { value: msg } })
  inputEl.simulate('keyDown', { keyCode: 13 })
  expect(onSubmit.mock.calls.length).toBe(1)
  expect(onSubmit.mock.calls[0][0].message).toEqual(msg)
})

it('Does not submit on empty value', () => {
  const onSubmit = jest.fn()
  const input = shallow(<Input onSubmit={onSubmit} />)
  const inputEl = input.find('input')
  inputEl.simulate('keyDown', { keyCode: 13 })
  expect(onSubmit.mock.calls.length).toBe(0)
})
