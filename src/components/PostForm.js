import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    handler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.handler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.handler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.handler}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}

export default PostForm
