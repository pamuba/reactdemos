import React from 'react'
import Person from './Person'
function Lists() {
    const NameList = [
        {
            id:1,
            name:"john",
            age:'25',
            skill:"React"
        },
        {
            id:2,
            name:"jill",
            age:'25',
            skill:"Angular"
        },
        {
            id:3,
            name:"jim",
            age:'35',
            skill:"Vue"
        }
    ]
    const names = ['Bruce', 'Clark', 'Diana'];
    const nameList =  NameList.map(person => <Person key={person.name} person={person} />)
    return (
        <div>
            {
               nameList
            }
        </div>
    )
}

export default Lists
