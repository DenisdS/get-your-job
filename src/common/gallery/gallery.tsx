import React, {
  PureComponent,
  ReactElement
} from 'react'
export default class GalleryComponent extends PureComponent {
  squad = [
    {
      id: 1,
      name: 'camila',
      photo: `${process.env.PUBLIC_URL}/images/camila.png`
    },
    {
      id: 2,
      name: 'beatriz',
      photo: `${process.env.PUBLIC_URL}/images/beatriz.png`,
    },
    {
      id: 3,
      name: 'guto',
      photo: `${process.env.PUBLIC_URL}/images/guto.png`
    },
    {
      id: 4,
      name: 'david',
      photo: `${process.env.PUBLIC_URL}/images/david.png`
    }
  ]

  render = (): ReactElement => {
    const squad = this.squad

    return (
      <section className="squad">
        <h2>
          CONHEÇA NOSSO TIME <br />
          FORA DE SÉRIE
        </h2>

        <ul>
          {
            squad.map(member => (
              <li key={member.id}>
                <img src={member.photo} alt={member.name} />
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}
