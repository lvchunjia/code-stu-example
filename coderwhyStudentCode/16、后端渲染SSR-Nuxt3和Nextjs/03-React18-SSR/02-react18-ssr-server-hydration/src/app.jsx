import React, { useState } from "react";
const App = function () {
  const [counter, setCounter] = useState(100);
  function addCounter() {
    setCounter(counter + 1);
  }
  return (
    <div className="app" style={{ border: "1px solid red;" }}>
      <h2>App</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default App;
