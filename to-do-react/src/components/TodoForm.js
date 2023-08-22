import React, { useState } from "react";
import "../App.css";

const TodoForm = ({addTodo}) => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("business");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      content: content,
      category: category,
    };

    addTodo(newTodo);

    setContent("");
    setCategory("business"); 

    console.log("New Todo:", newTodo);
  };

  

  return (
    <section className="create-todo">
      <h3>CREATE A TODO</h3>
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <h4>Whats on your todo list?</h4>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="complete the project"
          onChange={handleContentChange}
        />

        <h1>Pick a category</h1>
        <div className="options">
          <label>
            <input
              type="radio"
              name="category"
              id="category1"
              value="business"
              onChange={handleCategoryChange}
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
              onChange={handleCategoryChange}
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
