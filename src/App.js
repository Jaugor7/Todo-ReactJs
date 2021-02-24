import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Takes Dogs for a Walk.',"Learning with Live Stream." ,'Take Rubbish Out.']); //todos list will startt with empty state.
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">

        <h1> Hello World.....! {1+1}</h1>
        <form>
          <input value={input} onChange={event => setInput(event.target.value )}/>
          <button type="submit" onClick={addTodo}>Add Todo</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>



    </div>
  );
}

export default App;
