import React, { Fragment } from 'react'

function Greet(props) {
    const {name, heroName} = props
    return (
        <>
            <h1>Hello {name} aka {heroName}</h1>
        </>
    )

    // return React.createElement('div', {id:'id', className:'dummy'}, React.createElement('h1', null, 'Hello John'))
}

export default Greet
