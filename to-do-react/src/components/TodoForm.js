import React from "react";
import "./TodoForm.css";
import "../App.css";

const TodoForm = () => {
  return (
    <section className="create-todo">
      <h3>CREATE A TODO</h3>
      <form>
        <h4>Whats on your todo list?</h4>
        <input type="text" placeholder="complete the project" />

        <h1>Pick a category</h1>
        <div className="options">
          <label>
            <input
              type="radio"
              name="category"
              id="category1"
              value="business"
            />
            <span className="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              id="category2"
              value="personal"
            />
            <span className="bubble personal"></span>
            <div>Personal</div>
          </label>

          <input type="submit" value="Add todo" />
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
