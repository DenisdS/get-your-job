import React, { PureComponent, ReactElement } from 'react'

type State = {

}

type Props = {
}
export default class Home extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }

  }

  componentDidMount = async (): Promise<void> => {

    try {

    } catch (error) {
      this.setState({
        hasError: true
      })
      window.console.error(`Error:  \n ${error}`)
    }
  }

  componentWillUnmount = (): void => {
  }

  testando = (isVisible: boolean): void => {
    this.setState({  })
  }

  getTeste = async (subscriptionType: string): Promise<void> => {
    try {

    } catch (e) {
      window.console.error(e)
    }
  }

  render = (): ReactElement => {
    const {

    } = this.state

    const {

    } = this.props


    return (
      <div>
      </div>
    )
  }
}
