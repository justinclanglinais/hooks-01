import React, { useState } from 'react';

function ExampleWithManyStates () {
    const [ age, setAge ] = useState(37);
    const [ fruit, setFruit ] = useState('banana');
    const [ todos, setTodos ] = useState([{ text: 'Learn Hooks'}]);
    
    const handleChangeFruit = (e) => {
    setFruit(e.target.value)
}

    return (
        <div>
            <div>
                <button onClick={ () => setAge(age + 1) }>
                    Increase my age!
                </button>
                <p>You are {age} years old</p>
                <button onClick={ () => setAge(age - 1) }>
                    Decrease my age!
                </button>
            </div>
            <div>
                <p>{fruit}</p>
                <form>
                    <input onChange={handleChangeFruit} value={fruit}></input>
                </form>
            </div>
        </div>
    );
};

export default ExampleWithManyStates;