import React, { useState } from "react";

function App() {
  const [count, countState] = useState(0);

  function increase() {
    countState(count + 1);
  }
  function decrease() {
    countState(count - 1);
  }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
    </div>
  );
}

export default App;
