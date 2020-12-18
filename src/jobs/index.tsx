import React, { PureComponent, ReactElement } from 'react'
import { Occupations } from '../common';

import '../style/variables.scss';

type Props = {}

type State = {
  listJobs: Occupations[]
}

export default class Jobs extends PureComponent<Props, State> {

  constructor(props) {
    super(props)

    this.state = {
      listJobs: []
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
    let { vagas } = await response.json();

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
      cargo: job.cargo,
      ativa: job.ativa,
      link: job.link,
      localizacao: job.localizacao ? job.localizacao : 'remoto'
    }))

    this.setState({listJobs: listJobs})
  }

  render = (): ReactElement => {
    const {
      listJobs
    } = this.state

    return (
      <section className="jobs">
        <h2>VAGAS EM ABERTO</h2>
        <h3 style={{color: '#7d7873'}}>DESENVOLVIMENTO</h3>

        <ul>
          {
            listJobs.map((job) => (
            <li>{job.cargo}</li>
            ))
          }
        </ul>
      </section>
    )
  }
}
