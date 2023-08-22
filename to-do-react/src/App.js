import "./App.css";
import { useState } from "react";

import Greeting from "./components/Greeting";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the todos list
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  const toggleCheck = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodoContent = (index, newContent) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, content: newContent } : todo
    );
    setTodos(updatedTodos);
  };
 
  return (
    <div className="App">
      <Greeting/>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo} 
      toggleCheck={toggleCheck}
      editTodoContent={editTodoContent} 
      />
    </div>
  );
}

export default App;
