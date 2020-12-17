import React from 'react'
import { mount } from 'enzyme'

import { MediaHighlightComponent } from './'

const createComponent = ({}) => {
  const wrapper = mount(<MediaHighlightComponent  />)
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
