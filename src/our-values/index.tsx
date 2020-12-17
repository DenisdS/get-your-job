import React, { PureComponent, ReactElement } from 'react'

export default class OurValues extends PureComponent {

  render = (): ReactElement => {

    return (
      <section>
        <article>
          <h2>QUALIDADE DE VIDA</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur.
          </p>
        </article>

        <article>
          <h2>AMBIENTE DESCONTRAÍDO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur.
          </p>
        </article>

        <article>
          <h2>ATIVIDADES EXTRAS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur.
          </p>
        </article>
      </section>
    )
  }
}
