import React from 'react'

function Person({person}) {
    return (
        <>
            <h2>
                I am {person.name}.I am {person.age} years old. My skill {person.skill}
            </h2>
        </>
    )
}

export default Person
