import React from 'react'
import { mount } from 'enzyme'

import { HeaderComponent } from './'

const createComponent = ({}) => {
  const wrapper = mount(<HeaderComponent  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Header Component', () => {

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper).toMatchSnapshot()
      unmount()
    })
  })
})
