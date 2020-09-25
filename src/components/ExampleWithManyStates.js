import React, { useState } from 'react';

function ExampleWithManyStates () {
    const [ age, setAge ] = useState(37);
    const [ fruit, setFruit ] = useState('banana');
    const [ todos, setTodos ] = useState([{ text: 'Learn Hooks'}]);
    return (
        <div>
            <button onClick={ () => setAge(age + 1) }>
                Increase my age!
            </button>
            <p>You are {age} years old</p>
            <button onClick={ () => setAge(age - 1) }>
                Decrease my age!
            </button>
        </div>
    );
};

export default ExampleWithManyStates;