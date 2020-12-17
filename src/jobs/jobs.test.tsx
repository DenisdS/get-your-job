import React from 'react'
import { mount } from 'enzyme'

import Jobs from './index'


const createComponent = () => {
  const wrapper = mount(<Jobs  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Jobs Component', () => {

  it('Should match snapshot', () => {
    const [wrapper, unmount] = createComponent()

    expect(wrapper).toMatchSnapshot()
    unmount()
  })
})
