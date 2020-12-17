import React, { PureComponent, ReactElement } from 'react'

import {
  MediaHighlightComponent
} from '../common'

export default class About extends PureComponent {

  render = (): ReactElement => {

    return (
      <section>
        <MediaHighlightComponent />
      </section>
    )
  }
}
