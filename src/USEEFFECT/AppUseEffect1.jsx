import React,{useState,useEffect}  from "react"

const AppUseEffect1=()=>{

 let [count,setCount]=useState(0)
 
 useEffect(()=>{
 document.title=`You Clicked ${count} Times`
 },[count])
 
  return(
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{
      setCount(count+1)
     }}>INCREASE</button>


    </div>
  )
}
export default AppUseEffect1