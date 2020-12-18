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
    it('Should render jobs section', () => {
      const [wrapper, unmount] = createComponent()

      expect(wrapper.find('section.jobs').length).toBe(1)
      unmount()
    })

    describe('Render Section', () => {
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
  })
})
