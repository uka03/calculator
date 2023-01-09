// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState("");
  function num(e) {
    let numb = e.target.innerText + number;
    setnumber(numb);
  }
  return (
    <div className="App">
      <div className="main">
        <div className="not"></div>
        <div className="calculator">
          <div className="input">{number}</div>
          <div className="btns">
            <div className="nums">
              <button onClick={num}>7</button>
              <button onClick={num}>8</button>
              <button onClick={num}>9</button>
              <button onClick={num} className="opertor">
                /
              </button>
              <button onClick={num}>4</button>
              <button onClick={num}>5</button>
              <button onClick={num}>6</button>
              <button onClick={num} className="opertor">
                *
              </button>
              <button onClick={num}>1</button>
              <button onClick={num}>2</button>
              <button onClick={num}>3</button>
              <button onClick={num} className="opertor">
                -
              </button>
              <button onClick={num} className="zero">
                0
              </button>
              <button onClick={num} className="opertor">
                =
              </button>
              <button onClick={num} className="opertor">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
