/* tslint:disable: ordered-imports */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import RouterSwitch from './routes/router-switch'

ReactDOM.render(
    <BrowserRouter>
      <Route component={RouterSwitch} />
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
