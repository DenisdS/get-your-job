import React, {
  PureComponent,
  ReactElement
} from 'react'

import { Link } from 'react-router-dom'

import './header.scss'
export default class HeaderComponent extends PureComponent {

  render = (): ReactElement => {
    return (
      <header>
        <h1>Trabalhe no Elo7</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit,
          sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid.
        </p>

        <hr />

        <Link to={'#jobs'} >VAGAS EM ABERTO <span>{'>>'}</span></Link>
      </header>
    )
  }
}
