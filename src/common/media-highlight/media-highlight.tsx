import React, {
  PureComponent,
  ReactElement
} from 'react'

export default class MediaHighlightComponent extends PureComponent {
  imgThumbTalkCEO = `${process.env.PUBLIC_URL}/images/placeholder-video.png`

  render = (): ReactElement => {
    return (
      <>
        <article>
          <img
            src={this.imgThumbTalkCEO}
            alt="talk com o CEO"
          />
          <h2>PALAVRA DO CEO</h2>
          <h3>Carlos Curioni</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur.
            Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
      </>
    )
  }
}
