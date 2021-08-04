import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        //async
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </>
        )
    }
}

export default Counter
