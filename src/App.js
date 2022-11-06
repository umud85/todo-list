import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CheckboxList from './components/CheckboxList.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const changeTodo = (e) => {
    setTodo(e.target.value);
  }
  const addTodo = () => {
    if (todo) {
      setTodos([...todos, {value: todo, done: false}]);
      setTodo("");
    } 
  }



  return (
    <div className="App">
      <h1>ToDo-List App by Umut</h1>
      <div className="todo-entry">
        <Input
          id="todo-input"
          placeholder="Add Todo"
          onChange={changeTodo}
          value={todo}
          autoFocus={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <Button
          id="todo-button"
          variant="outlined"
          onClick={addTodo}
        >
          Add
        </Button>
      </div>
      <CheckboxList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
