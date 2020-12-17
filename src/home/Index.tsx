import React, { PureComponent, ReactElement } from 'react'

import {
  HeaderComponent
} from '../common'

import About from '../about/index'
export default class Home extends PureComponent {

  render = (): ReactElement => {

    return (
      <div>
        <HeaderComponent />
        <About />
      </div>
    )
  }
}
