import React, { useState } from "react";
import STYLE from "./signup.module.css"
 
const Signup=()=>{
let [name,setName]=useState("")
let[user,setUser]=useState("")
let [pass,setPass]=useState("")

let handleSubmit=(e)=>{
  e.preventDefault()
  if(name&&user&&pass)
  {
  localStorage.setItem("Name",name)
 localStorage.setItem("Username",user)
 localStorage.setItem("Password",pass)
 alert("Signup Successful")
 window.location.assign('/login')
   }
  else{
    alert("Please Enter Name,Username and password ")
    window.location.assign('/signup')
  }
}
let handleLoin=()=>
{
  window.location.assign('/login')

}
 return(
    < div className={STYLE.main}>
    <form action="" onSubmit={handleSubmit} className={STYLE.form} >
     <div className={STYLE.box}>
    <h2>SIGN UP</h2>
    <label htmlFor="name"></label> 
     <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}}  placeholder="Name" /> <br />
     <label htmlFor="username"></label> 
     <input type="text" id="username" onChange={(e)=>{setUser(e.target.value)}}  placeholder="Username"  /> <br />
     <label htmlFor="password"></label> 
     <input type="password" id="password"  onChange={(e)=>{setPass(e.target.value)}} placeholder="password"/>
     
     <br />
     <p onClick={handleLoin}><u>Already I Have Account Login</u></p>
     <br />
     <button className={STYLE.btn}  >signup</button>

</div>
    </form>



   </div>
  )
}
export default Signup