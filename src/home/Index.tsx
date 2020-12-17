import React, { PureComponent, ReactElement } from 'react'

import {
  HeaderComponent
} from '../common'

import About from '../about/index'
import OurValues from '../our-values/index'

import '../style/basic.scss'
export default class Home extends PureComponent {

  render = (): ReactElement => {

    return (
      <div className="home" >
        <HeaderComponent />
        <About />
        <OurValues />
      </div>
    )
  }
}
