import React, { useState } from "react";
const Home = function () {
  const [counter, setCounter] = useState(200);
  function addCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="Home" style={{ border: "2px solid green", margin: "10px" }}>
      <h3>Home</h3>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default Home;
