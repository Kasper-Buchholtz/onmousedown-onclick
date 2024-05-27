import React, { useState } from 'react';

const CounterOnClick = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };



    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className='bg-black px-4 py-2 text-white' onClick={increment}>Increment</button>
        </div>
    );
};

export default CounterOnClick;