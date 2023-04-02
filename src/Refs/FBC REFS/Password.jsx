import React,{useRef,useState} from "react";
import IMG from "./eye.jpg"
const Password=()=>
{
 let [password ,setPassword]=useState(true)
 let inputRef=useRef()

 let showPassword=()=>
 {
  if(password===true)
  {
    setPassword(!true)
  }
  else{
    setPassword(!false)
  }
 }
  return(
    <>
    <input type={password ? "text":"password"} ref={inputRef}   />
    <img src={IMG} alt="" height="10px" width="10px" onClick={showPassword} />
    </>
  )
}
export default Password