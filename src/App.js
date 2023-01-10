// import logo from "./logo.svg";
import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState("");
  const [oldnumber, newNumber] = useState("0");
  const [operoter, setoperoter] = useState("");

  function num(e) {
    let numb =number + e.target.innerText ;
    console.log((numb));
    setnumber((numb));
  }
  function oper(e){
      newNumber(number);
      let symbol =e.target.innerText
      setoperoter(symbol )
      setnumber("")
  }
  function result(){
    console.log(operoter)
    let resul;
    if (operoter=="/"){
         resul = Number(oldnumber) / Number(number)
       
    }else if(operoter=="*"){
      resul =Number(oldnumber) * Number(number)    
    }else if(operoter=="+"){
      resul = Number(oldnumber) + Number(number)
    }else if(operoter=="-"){
      resul = Number(oldnumber) - Number(number)
    }else{
      console.log("not working")
    }
      
    setnumber(resul)

  }
  function clear(){
    setnumber("")
  }
  return (
    <div className="App">
      <div className="main">
        <div className="not"></div>
        <div className="speaker"></div>
        <div className="selfcam"></div>
        <div className="calculator">
          <div className="input"  >{number}</div>
          <div className="btns">
            <div className="nums">
              <button onClick={num}>7</button>
              <button onClick={num}>8</button>
              <button onClick={num}>9</button>
              <button onClick={oper} className="opertor">
                /
              </button>
              <button onClick={num}>4</button>
              <button onClick={num}>5</button>
              <button onClick={num}>6</button>
              <button onClick={oper} className="opertor">
                *
              </button>
              <button onClick={num}>1</button>
              <button onClick={num}>2</button>
              <button onClick={num}>3</button>
              <button onClick={oper} className="opertor">
                -
              </button>
              <button onClick={clear} className="opertor">
                C
              </button>
              <button onClick={num} className="">
                0
              </button>
              <button onClick={result} className="opertor">
                =
              </button>
              <button onClick={oper} className="opertor">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="something"></div>
      </div>
    </div>
  );
}

export default App;
