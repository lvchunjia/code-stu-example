import React, { useState } from "react";
const About = function () {
  const [counter, setCounter] = useState(300);
  function addCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="About" style={{ border: "2px solid blue", margin: "20px" }}>
      <h3>About</h3>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default About;
