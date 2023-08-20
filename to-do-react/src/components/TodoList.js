import React from 'react';
import "./TodoList.css";
import "../App.css";

const TodoList = () => {
  return (
    <section className='todo-list'>
        <h3>ToDo List</h3>
        <div className="list">
            <div className="todo-item done">
                <label>
                    <input type="checkbox" />
                    <span className='bubble business'></span>
                </label>

                <div className="todo-content">
                    <input type="text" value="complete the project" readonly/>
                </div>

                <div className="actions">
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TodoList