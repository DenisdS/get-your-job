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

  describe('Render', () => {
    it('Should render  squad section', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('section.squad').length).toBe(1)
      unmount()
    })

    it('Should set class \'squad\'', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find('.squad').exists()).toBeTruthy()
      unmount()
    })

    describe('Render Section', () => {
      it('should this is an h2 tag in section', () => {
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('h2')).toBeTruthy()
        unmount()
      })

      it('should this is an ul tag in section', () => {
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('ul')).toBeTruthy()
        unmount()
      })

      describe('Render list', () => {
        it('should the are li tags in list', () => {
          const [wrapper, unmount] = createComponent({})

          expect(wrapper.find('ul li')).toHaveLength(4)
          unmount()
        })

        it('should there are image in list', () => {
          const [wrapper, unmount] = createComponent({})

          expect(wrapper.find('ul li img')).toBeTruthy()
          unmount()
        })
      })
    })
  })
})
