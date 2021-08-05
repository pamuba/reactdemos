import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <>
                <input ref={this.inputRef} type="text"/>
                <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

export default RefsDemo
