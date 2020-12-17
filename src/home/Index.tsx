import React, { PureComponent, ReactElement } from 'react'

import {
  HeaderComponent
} from '../common'

import About from '../about/index'
import OurValues from '../our-values/index'
export default class Home extends PureComponent {

  render = (): ReactElement => {

    return (
      <div>
        <HeaderComponent />
        <About />
        <OurValues />
      </div>
    )
  }
}
