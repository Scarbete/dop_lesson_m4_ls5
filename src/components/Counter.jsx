import React, {useState} from 'react'

const Counter = () => {
    const [state, setState] = useState(0)

    const minus = () => setState(prevState => prevState - 1)
    const plus = () => setState(prevState => prevState + 1)

    return (
        <div>
            <p>{state}</p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default Counter