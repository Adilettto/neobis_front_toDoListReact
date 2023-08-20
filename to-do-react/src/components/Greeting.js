import React from "react";
import "./Greeting.css";
import "../App.css";

const Greeting = () => {
  return (
    <section className="greeting">
      <h2 className="title">
        What's up <input type="text" placeholder="Name here" />
      </h2>
    </section>
  );
};

export default Greeting;
