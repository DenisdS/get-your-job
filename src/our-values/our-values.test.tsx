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
})
