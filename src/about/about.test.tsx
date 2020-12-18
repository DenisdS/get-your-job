import React from 'react'
import { mount } from 'enzyme'

import {
  GalleryComponent,
  MediaHighlightComponent
} from '../common'

import About from '../about/index'

const createComponent = ({}) => {
  const wrapper = mount(<About  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('About Component', () => {

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper).toMatchSnapshot()
      unmount()
    })
  })

  describe('Render', () => {
    it('Should render  Media Highlight component', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find( MediaHighlightComponent).length).toBe(1)
      unmount()
    })

    it('Should render Gallery component', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find(GalleryComponent).length).toBe(1)
      unmount()
    })
  })

  it('Should set class \'about\'', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper.find('.about').exists()).toBeTruthy()
    unmount()
  })
})
