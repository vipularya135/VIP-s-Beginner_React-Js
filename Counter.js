import React, { Component } from 'react'

class  Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment() {
        // this.setState({count: this.state.count +1})
        this.setState((prevState)=> ({
            count : prevState.count+1
        }))
    }

    incrementfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }


  render() {
    return (
      <div>
        count - {this.state.count}
        <br />
        <br />

        <button onClick={()=> this.incrementfive()}>increment</button>
      </div>

    )
  }
}

export default Counter
