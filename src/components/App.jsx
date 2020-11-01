import React, { useState } from "react";

function App() {
  //const state = React.useState();
  let [counterValue, setCountFunction] = useState(0);

  console.log(counterValue);

  function increase() {
    setCountFunction(counterValue + 1);
  }

  function decrease() {
    setCountFunction(counterValue - 1);
  }

  return (
    <div className="container">
      <h1>{counterValue}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
