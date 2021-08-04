import React, {useState} from 'react'

function UseState() {
    const [count, setCount ] = useState(0)
    return (
        <>
            <h2>You Clicked {count} times</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default UseState
