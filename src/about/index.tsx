import React, {
  PureComponent,
  ReactElement
} from 'react'

import {
  GalleryComponent,
  MediaHighlightComponent
} from '../common'
export default class About extends PureComponent {
  render = (): ReactElement => {
    return (
      <section className="about">
        <MediaHighlightComponent />
        <GalleryComponent />
      </section>
    )
  }
}
