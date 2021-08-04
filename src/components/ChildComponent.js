import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.handler}>Greet Paret</button>
        </div>
    )
}

export default ChildComponent
