import React, { Component } from 'react'

 class EventBind extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: 'hello'
  }
}

clickhandler() {
    this.setState({
        message: 'byee!!'
    })
    console.log(this)    
}
  render() {
    return (
      <div>
        <button onClick={this.clickhandler.bind(this)}>pls click me</button>
      </div>
    )
  }
}

export default EventBind
