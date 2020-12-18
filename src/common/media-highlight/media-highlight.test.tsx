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

  describe('Render article', () => {
    it('should return a article tag', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('article')).toBeTruthy()
      unmount()
    })

    describe('Render image', () => {
      it('should this is an image in article', () => {
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('article img')).toBeTruthy()
        unmount()
      })

      it('should this is alt atribute on image tag', () =>
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('article img').prop('alt')).toBeTruthy()
        unmount()
      })
    })

    describe('Render titles', () => {
      it('should return content with titles and p tags', () => {
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('article h2')).toBeTruthy()
        expect(wrapper.find('article h3')).toBeTruthy()
        expect(wrapper.find('article p')).toBeTruthy()
        unmount()
      })
    })
  })
})
