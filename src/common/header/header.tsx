import React, {
  PureComponent,
  ReactElement
} from 'react'

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
          nisi ut aliquid ex ea commodi consequatur.
          Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </header>
    )
  }
}
