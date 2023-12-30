import React, {Component} from 'react'

class classclick extends Component {
     clickhandler(){
        console.log('clicked the button')
    }

  render() {
    return (
        <div>
      <button onClick = {this.clickhandler} >click me</button>
    </div>
    )
  }
}

export default classclick
