import React from "react";
import { useState } from "react";

const App = function () {
  const [counter, setCounter] = useState(100);

  function addCounter() {
    setCounter(counter);
  }
  return (
    <div>
      <h2>App</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default App;
