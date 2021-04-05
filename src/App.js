import React, {useState} from "react";
import "./App.scss";

function App() {
  const [number, setNumber] = useState(0);
  function addOne() {
    setNumber(number + 2);
  }
  function subOne() {
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <button type="button" onClick={addOne}>
        +
      </button>
      <button type="button" onClick={subOne}>
        -
      </button>
      <br />
      <h2>{number}</h2>
    </div>
  );
}

export default App;
