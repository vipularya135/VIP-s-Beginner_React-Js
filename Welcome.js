import React, { Component } from "react"

class Welcome extends Component {
    render() {
        return <h1>welcome {this.props.name}, how are you {this.props.hname} </h1>
    }
}

export default Welcome