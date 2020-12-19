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

  describe('Render', () => {

    describe('Render Section', () => {
      it('Should render jobs section', () => {
        const [wrapper, unmount] = createComponent()

        expect(wrapper.find('section#jobs').length).toBe(1)
        unmount()
      })

      it('should this is an h2 tag in section', () => {
        const [wrapper, unmount] = createComponent()

        expect(wrapper.find('h2')).toBeTruthy()
        expect(wrapper.find('h3')).toBeTruthy()
        unmount()
      })

      it('should this is an ul tag in section', () => {
        const [wrapper, unmount] = createComponent()

        expect(wrapper.find('ul')).toBeTruthy()
        unmount()
      })
    })

    describe('Render image', () => {
      it('should this is an image in section', () => {
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('section.jobs img')).toBeTruthy()
        unmount()
      })

      it('should this is alt atribute on image tag', () =>
        const [wrapper, unmount] = createComponent({})

        expect(wrapper.find('section#jobs img').prop('alt')).toBeTruthy()
        unmount()
      })
    })
  })
})
