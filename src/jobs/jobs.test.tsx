import React from 'react'
import { mount } from 'enzyme'

import {
  CurrentJobsMock,
  JobsMock
} from './__mocks__'

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

  describe('Functions', () => {
    it('Should call getJobs on componentDidMount', async () => {
      const mock = jest.fn()
      const [wrapper, unmount] = createComponent()

      wrapper.instance().getJobs = mock
      await wrapper.instance().componentDidMount()

      expect(wrapper.instance().getJobs).toHaveBeenCalled()
      unmount()
    })

    it('Should call checkActivesJobs on getJobs', async () => {
      const mock = jest.fn()
      const [wrapper, unmount] = createComponent()

      wrapper.instance().checkActivesJobs = mock
      await wrapper.instance().getJobs()

      expect(wrapper.instance().checkActivesJobs).toHaveBeenCalled()
      unmount()
    })

    it('Should update listJobs', async () => {
      const [wrapper, unmount] = createComponent()

      wrapper.setState({ listJobs: [] })
      wrapper.instance().checkLocationJobs(JobsMock)

      expect(wrapper.state('listJobs')).toEqual(CurrentJobsMock)
      unmount()
    })

    it('Should call checkLocationJobs on checkActivesJobs', async () => {
      const mock = jest.fn()
      const [wrapper, unmount] = createComponent()

      wrapper.instance().checkLocationJobs = mock
      await wrapper.instance().checkActivesJobs(JobsMock)

      expect(wrapper.instance().checkLocationJobs).toHaveBeenCalled()
      unmount()
    })

    it('Should return idJob when call generateId', () => {
      const [wrapper, unmount] = createComponent()

      wrapper.setState({ id: 1 })
      wrapper.instance().generateId()

      expect(wrapper.state('id')).toEqual(2)
      unmount()
    })
  })
})
