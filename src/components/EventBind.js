import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        this.handler = this.handler.bind(this)
    }
    handler(){
        this.setState({
            message:"GoodBye"
        })
        console.log(this)
    }
    render() {
        return (
            <>
             <h2>{this.state.message}</h2>
             <button onClick={this.handler}>Click</button>
            </>
        )
    }
}

export default EventBind
