import React, {
  PureComponent
} from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../home/Index'
export default class RouterSwitch extends PureComponent {

  render = () => {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home}/>
      </Switch>
    )
  }
}
