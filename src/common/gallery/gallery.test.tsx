import React from 'react'
import { mount } from 'enzyme'

import { GalleryComponent } from '.'

const createComponent = ({}) => {
  const wrapper = mount(<GalleryComponent  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Gallery Component', () => {

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper).toMatchSnapshot()
      unmount()
    })
  })
})
