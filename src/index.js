import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-spring'

class Loader extends React.PureComponent {
  state = { loaded: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 1000)
  }

  render() {
    const { percentage } = this.props
    const styles = {
      height: '100vh',
      width: '100vw',
      background: 'tomato'
    }

    return (
      <Transition from={{ opacity: 1 }} leave={{ opacity: 0 }}>
        {!this.state.loaded &&
          ((style) => (
            <div style={Object.assign({}, styles, style)}>
              <div>{Math.round(percentage)} %</div>
            </div>
          ))}
      </Transition>
    )
  }
}

ReactDOM.render(<Loader percentage={0} />, document.getElementById('root'))
