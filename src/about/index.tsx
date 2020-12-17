import React, { PureComponent, ReactElement } from 'react'

import {
  GalleryComponent,
  MediaHighlightComponent
} from '../common'

export default class About extends PureComponent {

  render = (): ReactElement => {

    return (
      <section>
        <MediaHighlightComponent />
        <GalleryComponent />
      </section>
    )
  }
}
