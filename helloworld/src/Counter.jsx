import React, { useState } from 'react';

export default function Counter({ start }) {
    const [count, setCount] = useState(start);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>
                Zvýšit počet
            </button>
        </div>
    );
}
