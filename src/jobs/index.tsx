import React, {
  PureComponent,
  ReactElement }
from 'react'

import { Occupations } from '../common'

import '../style/variables.scss'

type Props = {}

type State = {
  id: number,
  listJobs: Occupations[]
}

export default class Jobs extends PureComponent<Props, State> {
  imgBanner = `${process.env.PUBLIC_URL}/images/foto-bottom.png`

  constructor(props: Props) {
    super(props)

    this.state = {
      id: 0,
      listJobs: [],
    }
  }

  componentDidMount = async (): Promise<void> => {
    try {
      await this.getJobs()
    } catch (error) {
      window.console.error(`Error: getJobs \n ${error}`)
    }
  }

  getJobs = async (): Promise<void> => {
    const response = await fetch('http://www.mocky.io/v2/5d6fb6b1310000f89166087b')
    let { vagas } = await response.json()

    this.checkActivesJobs(vagas)
  }

  checkActivesJobs = (jobs): void => {
    let jobsActives = []

    jobsActives = jobs.filter(job => (
      job.ativa
    ))

    this.checkLocationJobs(jobsActives)
  }

  checkLocationJobs = (jobs): void => {
    let listJobs = []

    listJobs = jobs.map(job => ({
      id: this.generateId(),
      cargo: job.cargo,
      ativa: job.ativa,
      link: job.link,
      localizacao: job.localizacao ? job.localizacao : 'Remoto'
    }))

    this.setState({
      listJobs: listJobs
    })
  }

  generateId = (): number =>  {
    const { id } = this.state
    let idJob = id + 1

    this.setState({id: idJob})
    return idJob
  }

  render = (): ReactElement => {
    const {
      listJobs
    } = this.state

    return (
      <section id="jobs">
        <img
          src={this.imgBanner}
          alt="Saiba mais sobre nós"
        />
        <h2>VAGAS EM ABERTO</h2>
        <h3 style={{color: '#7d7873'}}>DESENVOLVIMENTO</h3>

        <ul>
          {
            listJobs.map(job => (
              <li key={job.id}>
                <a href={job.link} target="_blank">
                  {job.cargo}
                  <span style={{color: '#a7a4a1'}}>
                    {!job.localizacao.bairro ? job.localizacao :
                      `${job.localizacao.bairro} - ${job.localizacao.cidade},
                      ${job.localizacao.pais}`
                    }
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}
