import React, { useEffect, useReducer, useState } from 'react'

export default function HookExample3() {
    /* useReducer 예제 */
    // dispatch라는 함수를 이용. 복잡한 상태의 관리가 필요할 떄 사용하면 좋음(?)
    const initialState = {count: 0, name: 'jimmy'};

    function reducer(state, action) {
        switch(action.type) {
            case 'reset':
                return initialState;

            case 'increment':
                return { count: state.count + 1, name: 'timmy' };

            case 'decrement':
                return { count: state.count - 1, name: 'amy' };
                
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [action, setAction] = useState({type : ''});

    useEffect(() => {
        console.log(action.type)
    }, [action.type]);

    return (
        <div>
            Count : {state.count}{' '}
            Name : {state.name}{' '}
            <button onClick={()=> {
                setAction({type: 'reset'});
                dispatch({type: 'reset'}); 
            }}>Reset</button>{' '}
            
            <button onClick={()=> {
                setAction({type: 'increment'});
                dispatch({type: 'increment'});
            }}>+</button>{' '}

            <button onClick={()=> {
                setAction({type: 'decrement'});
                dispatch({type: 'decrement'})
            }}>-</button>
        </div>
    )
}
