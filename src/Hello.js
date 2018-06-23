import React, { Component } from 'react'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: props.clicked };
    }
    isClicked() {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <div>Hello, World!</div>
        )
    }
}

export default Hello