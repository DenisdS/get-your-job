import React, { PureComponent, ReactElement } from 'react'

import {
  HeaderComponent
} from '../common'
export default class Home extends PureComponent {

  render = (): ReactElement => {

    return (
      <div>
        <HeaderComponent />
      </div>
    )
  }
}
