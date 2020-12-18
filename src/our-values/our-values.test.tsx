import React from 'react'
import { mount } from 'enzyme'

import OurValues from './index'

const createComponent = ({}) => {
  const wrapper = mount(<OurValues  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('OurValues Component', () => {

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper).toMatchSnapshot()
      unmount()
    })
  })

  it('Should set class \'our values\'', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper.find('.our-values').exists()).toBeTruthy()
    unmount()
  })
})
