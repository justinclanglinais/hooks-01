import React from 'react';
import './App.css';
import Example from './components/Example.js'
import ExampleWithManyStates from './components/ExampleWithManyStates';

function App() {
  return (
    <div className="App">
      <div>
        <Example />
      </div>
      <div>
        <ExampleWithManyStates />
      </div>
    </div>
  );
}

export default App;
