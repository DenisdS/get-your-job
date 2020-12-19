import React from 'react'
import { mount } from 'enzyme'

import {
  HeaderComponent
} from '../common'

import About from '../about/index'
import Jobs from '../jobs/index'
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

    it('Should render Jobs page', () => {
      const [wrapper, unmount] = createComponent({})

      expect(wrapper.find(Jobs).length).toBe(1)
      unmount()
    })
  })

  it('Should set class \'home\'', () => {
    const [wrapper, unmount] = createComponent({})

    expect(wrapper.find('.home').exists()).toBeTruthy()
    unmount()
  })

  describe('Functions', () => {
    it('Should call checkAccessibility on componentDidMount', async () => {
      const mock = jest.fn()
      const [wrapper, unmount] = createComponent()

      wrapper.instance().checkAccessibility = mock
      await wrapper.instance().componentDidMount()

      expect(wrapper.instance().checkAccessibility).toHaveBeenCalled()
      unmount()
    })

    it('Should contrast when call the accessibility and constrast is false', async () => {
      const [wrapper, unmount] = createComponent()

      wrapper.setState({ contrast: false })
      wrapper.instance().accessibility()
      expect(wrapper.state('contrast')).toBeTruthy()
      unmount()
    })

    it('Should remove contrast when call the accessibility and constrast is true', async () => {
      const [wrapper, unmount] = createComponent()

      wrapper.setState({ contrast: true })
      wrapper.instance().accessibility()
      expect(wrapper.state('contrast')).toBeFalsy()
      unmount()
    })
  })
})
