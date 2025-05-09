import React, { useState } from 'react';

function HelloWorld({ text }) {
    const [name, setName] = useState('Uživatel'); // Vytvoření stavu name

    // Obsluha onChange inputu
    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>{text} {name}!</h1>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
    );
}

export default HelloWorld;
// This is a simple React component that renders "Hello World!" in Czech.