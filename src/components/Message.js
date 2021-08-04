import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Welcome to my site"
        }
    }
    changeMessage(){
        // alert("Inside")
        //async
        this.setState({
            message:'New Message'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Change</button>
            </>
        )
    }
}

export default Message
