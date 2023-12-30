import React, { Component } from "react"

class Msg extends Component {
    constructor() {
        super()
        this.state = {
            Msg: "welcome visitor"

        }
    }

    changemsg(){
        this.setState(
            {
                Msg:"thank you!"
            }
            )
    }
    render() {
        return (
           <div>
                <h1>{this.state.Msg}</h1>
                <button onClick={() => this.changemsg()}> subscribe</button>
           </div>
        )
    }
}

export default Msg