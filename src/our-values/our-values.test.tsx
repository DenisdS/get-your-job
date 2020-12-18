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

  describe('Render section', () => {
    it('Should set class \'our values\'', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('.our-values').exists()).toBeTruthy()
      unmount()
    })

    it('should return a article  about values', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('article')).toHaveLength(3)
      unmount()
    })

    it('should this is an image in article', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('article img')).toBeTruthy()
      unmount()
    })

    it('should return content with title and p tags', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('article h2')).toBeTruthy()
      expect(wrapper.find('article p')).toBeTruthy()
      unmount()
    })
  })
})
