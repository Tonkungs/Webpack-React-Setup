import React from 'react'
// https://devahoy.com/posts/learn-react-with-create-react-app/
class HelloApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        //   this.setState({
        //       counter: this.state.counter + 1
        //   })
        // กัน side effect เลยใช่ข้างล่างแทน
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Ahoy! React</h1>
                <p>{this.props.message}</p>
                <button onClick={this.handleClick}>Click me!</button>
                <p>Total click : {this.state.counter}</p>
            </React.Fragment>
        )
    }
}

export default HelloApp