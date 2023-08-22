import React, { useEffect, useState } from "react";
import "../App.css";

const Greeting = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");

    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    if(name) {
      localStorage.setItem("name", name);
    }
  }, [name])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="greeting">
      <h2 className="title">
        What's up{" "}
        <input
          type="text"
          id="name"
          placeholder="Name here"
          value={name}
          onChange={handleNameChange}
        />
      </h2>
    </section>
  );
};

export default Greeting;
