import React,{useState,useEffect} from "react";

const AppUseEffectWidth=()=>{
 let [width,setWidth]=useState(window.innerWidth)

 useEffect(()=>{
window.addEventListener("resize",()=>{
  setWidth(window.innerWidth)
})
 },[width])




  return(
  <div>
<h1>{width}</h1>

  </div>
  )
}
export default AppUseEffectWidth