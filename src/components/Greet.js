import React, { Fragment } from 'react'

function Greet(props) {
    return (
        <>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </>
    )

    // return React.createElement('div', {id:'id', className:'dummy'}, React.createElement('h1', null, 'Hello John'))
}

export default Greet
