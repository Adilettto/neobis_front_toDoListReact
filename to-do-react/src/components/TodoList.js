import { useState } from "react";
import "../App.css";

const TodoList = ({ todos, deleteTodo, toggleCheck }) => {


  return (
    <section className="todo-list">
      <h3>ToDo List</h3>
      <div className="list" id="todo-list">
        {todos.map((todo, index) => (
          <div className={`todo-item ${todo.completed ? 'done' : ''}`} key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCheck(index)}
              />
              <span className={`bubble ${todo.category}`}></span>
            </label>

            <div className="todo-content">
              <input type="text" value={todo.content}/>
            </div>

            <div className="actions">
              <button className="edit">Edit</button>
              <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
