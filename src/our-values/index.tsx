import React, {
  PureComponent,
  ReactElement
} from 'react'
export default class OurValues extends PureComponent {

  ourValues = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/qualidade.png`,
      altImg: 'feliz',
      title: 'QUALIDADE DE VIDA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/images/descontracao.png`,
      altImg: 'descolado',
      title: 'AMBIENTE DESCONTRAÍDO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/images/atividades.png`,
      altImg: 'desestressar',
      title: 'ATIVIDADES EXTRAS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
    }
  ]

  render = (): ReactElement => {
    const ourValues = this.ourValues

    return (
      <section className="our-values">
        {
          ourValues.map(values => (
            <article key={values.id }>
              <img src={values.image} alt={values.altImg} />
              <h2>{values.title}</h2>
              <p>{values.description}</p>
            </article>
          ))
        }

        <hr />

        <a href="#jobs">SAIBA MAIS <span>{'>>'}</span></a>
      </section>
    )
  }
}
