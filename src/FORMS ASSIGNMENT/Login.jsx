import React, { useState } from "react";
import Home from "./Home";
import STYLE from "./login.module.css"

const Login=()=>{
 let [user,setUser]=useState("")
 let[pass,setPass]=useState("")
 let[home,setHome]=useState(false)
let handleSubmit=(e)=>{
  e.preventDefault()
  let userL=localStorage.getItem("Username")
  let passL=localStorage.getItem("Password")
  if(user===userL&&pass===passL)
  {
    alert("Login Successful")
    setHome(true)
  }
  else{
    alert("Invalid username and password")
    window.location.reload()
  }

}

  return(
    < >{home?<Home/>:
     <form action="" onSubmit={handleSubmit} className={STYLE.form} >
      <div className={STYLE.box}>
     <h2>LOGIN</h2>
      <label htmlFor="username"></label> <br />
      <input type="text" id="username" onChange={(e)=>{setUser(e.target.value)}}  placeholder="Username" /> <br />
      <label htmlFor="password"></label> <br />
      <input type="password" id="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="password" />
      <br />
      <button className={STYLE.btn}>login</button>

</div>
     </form>

  }
    </>
  )

}
export default Login