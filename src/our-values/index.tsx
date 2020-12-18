import React, { PureComponent, ReactElement } from 'react'

export default class OurValues extends PureComponent {

  ourValues = [
    {
      title: 'QUALIDADE DE VIDA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    {
      title: 'AMBIENTE DESCONTRAÍDO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    {
      title: 'ATIVIDADES EXTRAS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    }
  ]

  render = (): ReactElement => {
    const ourValues = this.ourValues

    return (
      <section className="our-values">
        {
          ourValues.map((values) => (
            <article>
              <h2>{values.title}</h2>
              <p>{values.description}</p>
            </article>
          ))
        }
      </section>
    )
  }
}
