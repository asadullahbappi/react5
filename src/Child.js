import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    return (
        <div>
            <h2>
                This is first Child using counterContext
            </h2>
    <h4>Counter Value is: {counterValue[0]}</h4>
    <button onClick={()=> {counterValue[1](++counterValue[0])}}>
        Increament Reducer
        </button>
        </div>
    )
}

export default Child;