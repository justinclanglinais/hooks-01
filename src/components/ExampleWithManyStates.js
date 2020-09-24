import React, { useState } from 'react';

function ExampleWithManyStates () {
    const [ age, setAge ] = useState(37);
    const [ fruit, setFruit ] = useState('banana');
    const [ todos, setTodos ] = useState([{ text: 'Learn Hooks'}]);
    return (
        <div>
            <p>You clicked {count} times!</p>
            <button onClick={ () => setCount(count + 1) }>
                Click me!
            </button>
        </div>
    );
};

export default ExampleWithManyStates;