import React, { useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo])
    setInput('');
  }
  
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={ input }
        onChange={ (e) => setInput( e.target.value ) }
      />
      <button
        type="button"
        onClick={ () => addTodo(input) }
      >Add</button>
      <ul>
        {
          list.map((list) => (
            <li key={ list.id }>
              { list.todo }
              <button
                type='button'
                onClick={ () => deleteTodo(list.id) }
              >X</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App