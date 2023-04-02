import React,{useState} from "react";
import "./globle1.css"
const App5=()=>
{
let [counter,setcounter]=useState(0)

let handleIncreament=()=>{
setcounter(counter +1 )
}
let handleDecreament=()=>{
  setcounter(counter -1)
}
let handleReset=()=>{
  setcounter(0)
}
  return(
    <div className="main">
    <div className="r1">
    <h1>{counter}</h1>
    </div>
    <div className="r2">
   <button className="b1" onClick={handleIncreament}>INCREAMENT</button>
   <button className="b2" onClick={handleDecreament}>DECREAMENT</button>
   <button className="b3" onClick={handleReset}>RESET</button>
    </div>
    </div>
  )
}
export default App5