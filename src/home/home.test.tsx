import React from 'react'
import { mount } from 'enzyme'

import {
  HeaderComponent
} from '../common'

import About from '../about/index'
import OurValues from '../our-values/index'

import Home from './Index'

const createComponent = ({}) => {
  const wrapper = mount(<Home  />)
  const unmount = () => wrapper.unmount()

  return [wrapper, unmount]
}

describe('Home Component', () => {

  describe('Snapshot', () => {
    it('Should match snapshot', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper).toMatchSnapshot()
      unmount()
    })
  })

  describe('Render', () => {
    it('Should render Header component', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find(HeaderComponent).length).toBe(1)
      unmount()
    })

    it('Should render About page', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find(About).length).toBe(1)
      unmount()
    })

    it('Should render Our values page', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find(OurValues).length).toBe(1)
      unmount()
    })
  })
})
