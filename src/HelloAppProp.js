import React from 'react'

class HelloAppProp extends React.Component {
  render() {
    return (
      <div>
        <h1>Ahoy! React</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default HelloAppProp