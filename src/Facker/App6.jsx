import React,{useState} from "react";
import {facker} from "@facker-js/facker"
const App6=()=>{
let [IMG,setIMG]=useState(facker.image.avatar())
 let handleChange=()=>{
  setIMG(facker.image.avatar())
 }
return(
  <>
  <img src={IMG} alt="" />
  <button onClick={handleChange}>Change</button>
  </>
)
}
export default App6