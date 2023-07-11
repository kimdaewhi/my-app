import React, { useState } from 'react'

export default function HookExample3() {
    /* useReducer 예제 */
    const initialCount = 0;
    const [count, setCount] = useState(0);

    return (
        <div>
            Count : {count}{' '}
            <button onClick={()=> setCount(initialCount)}>Reset</button>{' '}
            <button onClick={()=> setCount(prev => prev + 1)}>+</button>{' '}
            <button onClick={()=> setCount(prev => prev - 1)}>-</button>
        </div>
    )
}
