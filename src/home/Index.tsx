
import React, {
  PureComponent,
  ReactElement
} from 'react'

import { HeaderComponent } from '../common'
import About from '../about/index'
import Jobs from '../jobs/index'
import OurValues from '../our-values/index'

import '../style/basic.scss'

type Props = {}

type State = {
  contrast: boolean
}
export default class Home extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      contrast: localStorage.getItem('contrast') === 'true' ? true : false
    }
  }

  componentDidMount = async (): Promise<void> => {
    try {
      await this.checkAccessibility()
    } catch (error) {
      window.console.error(`Error: checkAccessibility \n ${error}`)
    }
  }

  checkAccessibility = (): void => {
    const { contrast } = this.state

    contrast ? document.body.classList.add('home-contrast') : document.body.classList.remove('home-contrast')
  }

  accessibility = (): void => {
    const { contrast } = this.state

    if (!contrast) {
      document.body.classList.add('home-contrast')
      this.setState({ contrast: true  })
      localStorage.setItem('contrast', JSON.stringify(true))
    } else {
      document.body.classList.remove('home-contrast')
      this.setState({ contrast: false  })
      localStorage.setItem('contrast', JSON.stringify(false))
    }
  }

  render = (): ReactElement => {

    return (
      <div className="home" >
        <p className="toolsAccessibility" onClick={this.accessibility}>
          Acessibilidade - Contraste
        </p>
        <HeaderComponent />
        <About />
        <OurValues />
        <Jobs />
      </div>
    )
  }
}
