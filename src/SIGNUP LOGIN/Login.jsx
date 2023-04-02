import React, { useState } from "react";
import STYLE from "./login.module.css"

const Login=()=>{
 let [user,setUser]=useState("")
 let[pass,setPass]=useState("")
 
let handleSubmit=(e)=>{
  e.preventDefault()
  let userL=localStorage.getItem("Username")
  let passL=localStorage.getItem("Password")
  if(user===userL&&pass===passL)
  {
    alert("Login Successful")
    window.location.assign('./Welcome')
  }
  else{
    alert("Invalid username and password")
    window.location.assign('./login')
  }

}
let hanclichSignup=()=>{
  window.location.assign('./signup')

}

  return(
    < >
  
     <form action="" onSubmit={handleSubmit} className={STYLE.form} >
      <div className={STYLE.box}>
     <h2>LOGIN</h2>
      <label htmlFor="username"></label> 
      <input type="text" id="username" onChange={(e)=>{setUser(e.target.value)}}  placeholder="Username" /> <br />
      <label htmlFor="password"></label> 
      <input type="password" id="password" onChange={(e)=>{setPass(e.target.value)}} placeholder="password" />
      <br />
      <p onClick={hanclichSignup}><u>New? I Want To Signup</u></p>
      <button className={STYLE.btn}>login</button>

</div>
     </form>

  
    </>
  )

}
export default Login