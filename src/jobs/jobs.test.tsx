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

    it('Should atualizar jobs', async () => {
      const mock = jest.fn()

      const jobs = [
          {
            "cargo": "Desenvolvedor Mobile Senior (Android e iOS)",
            "ativa": true,
            "link": "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
            "localizacao": {
                "bairro": "Vila Olímpia",
                "cidade": "São Paulo",
                "pais": "Brasil"
            }
        },
        {
            "cargo": "Desenvolvedor Java Senior",
            "ativa": true,
            "link": "http://elo7.dev/vaga/desenvolvedor-java-senior",
            "localizacao": {
                "bairro": "Vila Olímpia",
                "cidade": "São Paulo",
                "pais": "Brasil"
            }
        },
        {
            "cargo": "Desenvolvedor Front end",
            "ativa": true,
            "link": "http://elo7.dev/vaga/desenvolvedor-front-end",
            "localizacao": {
                "bairro": "Vila Olímpia",
                "cidade": "São Paulo",
                "pais": "Brasil"
            }
        },
        {
            "cargo": "Desenvolvedor Java Junior",
            "ativa": true,
            "link": "http://elo7.dev/vaga/desenvolvedor-java-jr",
        }
      ]


      const currentJobs = [
        {
          "id": 1,
          "cargo": "Desenvolvedor Mobile Senior (Android e iOS)",
          "ativa": true,
          "link": "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
          "localizacao": {
              "bairro": "Vila Olímpia",
              "cidade": "São Paulo",
              "pais": "Brasil"
          }
      },
      {
        "id": 2,
          "cargo": "Desenvolvedor Java Senior",
          "ativa": true,
          "link": "http://elo7.dev/vaga/desenvolvedor-java-senior",
          "localizacao": {
              "bairro": "Vila Olímpia",
              "cidade": "São Paulo",
              "pais": "Brasil"
          }
      },
      {
        "id": 3,
          "cargo": "Desenvolvedor Front end",
          "ativa": true,
          "link": "http://elo7.dev/vaga/desenvolvedor-front-end",
          "localizacao": {
              "bairro": "Vila Olímpia",
              "cidade": "São Paulo",
              "pais": "Brasil"
          }
      },
      {
        "id": 4,
          "cargo": "Desenvolvedor Java Junior",
          "ativa": true,
          "link": "http://elo7.dev/vaga/desenvolvedor-java-jr",
          "localizacao": "Remoto"
      }
      ]


      const [wrapper, unmount] = createComponent()

      wrapper.setState({ listJobs: [] })

      wrapper.instance().checkLocationJobs(jobs)

      wrapper.update()

      expect(wrapper.state('listJobs')).toEqual(currentJobs)
      unmount()
    })





    it('Should call checkLocationJobs on checkActivesJobs', async () => {
      const mock = jest.fn()

      const jobs = [
        [
          {
              "cargo": "Desenvolvedor Mobile Senior (Android e iOS)",
              "ativa": true,
              "link": "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
              "localizacao": {
                  "bairro": "Vila Olímpia",
                  "cidade": "São Paulo",
                  "pais": "Brasil"
              }
          },
          {
              "cargo": "Desenvolvedor Mobile Junior (Android)",
              "ativa": false,
              "link": "http://elo7.dev/vaga/desenvolvedor-mobile-junior",
              "localizacao": {
                  "bairro": "Vila Olímpia",
                  "cidade": "São Paulo",
                  "pais": "Brasil"
              }
          },
          {
              "cargo": "Desenvolvedor Java Senior",
              "ativa": true,
              "link": "http://elo7.dev/vaga/desenvolvedor-java-senior",
              "localizacao": {
                  "bairro": "Vila Olímpia",
                  "cidade": "São Paulo",
                  "pais": "Brasil"
              }
          },
          {
              "cargo": "Desenvolvedor Front end",
              "ativa": true,
              "link": "http://elo7.dev/vaga/desenvolvedor-front-end",
              "localizacao": {
                  "bairro": "Vila Olímpia",
                  "cidade": "São Paulo",
                  "pais": "Brasil"
              }
          },
          {
              "cargo": "Desenvolvedor Java Junior",
              "ativa": false,
              "link": "http://elo7.dev/vaga/desenvolvedor-java-jr",
              "localizacao": {
                  "bairro": "Vila Olímpia",
                  "cidade": "São Paulo",
                  "pais": "Brasil"
              }
          },
          {
              "cargo": "Desenvolvedor Java Junior",
              "ativa": true,
              "link": "http://elo7.dev/vaga/desenvolvedor-java-jr"
          }
      ]
      ]

      const [wrapper, unmount] = createComponent()

      wrapper.instance().checkLocationJobs = mock
      await wrapper.instance().checkActivesJobs(jobs)

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
