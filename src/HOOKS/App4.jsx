import React,{useState} from "react"
 const App4=()=>
 {
  let [userName,setuserName]=useState("AMIT")

  let handleChange=()=>
  {
    setuserName("AMIT NAGESH")
  }
  return(
    <>
    <h1>{userName}</h1>
    <button onClick={handleChange}>Change</button>
    </>
  )
 }
 export default App4