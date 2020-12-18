import React, {
  PureComponent,
  ReactElement
} from 'react'
export default class GalleryComponent extends PureComponent {
  squad = [
    {
      name: 'camila',
      photo: `${process.env.PUBLIC_URL}/images/camila.png`
    },
    {
      name: 'beatriz',
      photo: `${process.env.PUBLIC_URL}/images/beatrizx.png`,
    },
    {
      name: 'guto',
      photo: `${process.env.PUBLIC_URL}/images/guto.png`
    },
    {
      name: 'david',
      photo: `${process.env.PUBLIC_URL}/images/david.png`
    }
  ]

  render = (): ReactElement => {
    const squad = this.squad

    return (
      <div>
        <h2>
          CONHEÇA NOSSO TIME <br />
          FORA DE SÉRIE
        </h2>

        <ul>
          {
            squad.map((member) => (
              <li>
                <img src={member.photo} alt={member.name} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
