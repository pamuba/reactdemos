import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'angular'
        }
    }
    handler = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handler2 = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handler3 = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
            <div>
            <label>Username</label><br/>
            <input onChange={this.handler} type="text" value={this.state.username}/>
            <br/><label>Comments</label><br/>
            <textarea onChange={this.handler2} type="text" value={this.state.comments}/>
            <br/><label>Topics</label><br/>
            <select onChange={this.handler3} type="text" value={this.state.topic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vuejs">VueJS</option>
            </select>
            </div>
            <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form
