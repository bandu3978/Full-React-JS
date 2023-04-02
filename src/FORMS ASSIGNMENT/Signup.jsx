import React, { useState,useRef } from "react";
import Login from "./Login";
import STYLE from "./signup.module.css"

const Signup=()=>{
let [name,setName]=useState("")
let[user,setUser]=useState("")
let [pass,setPass]=useState("")
let[login,setLogin]=useState(false)
let nameRef=useRef()
let userRef=useRef()
let passRef=useRef()

let handleSubmit=(e)=>{
  e.preventDefault()
  if(nameRef.current.value&&userRef.current.value&&passRef.current.value)
  {
  localStorage.setItem("Name",name)
 localStorage.setItem("Username",user)
 localStorage.setItem("Password",pass)
 alert("Signup Successful")
 setLogin(true)
   }
  else{
    alert("Please Enter Name,Username and password ")
    window.location.reload()
  }
}
let handlechange=()=>{
  setLogin(true)
}

 return(
    < >{login?<Login/>:
    <form action="" onSubmit={handleSubmit} className={STYLE.form} >
     <div className={STYLE.box}>
    <h2>SIGN UP</h2>
    <label htmlFor="name"></label> <br />
     <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}}  placeholder="Name" ref={nameRef} /> <br />
    
     <label htmlFor="username"></label> <br />
     <input type="text" id="username" onChange={(e)=>{setUser(e.target.value)}}  placeholder="Username" ref={userRef} /> <br />
     <label htmlFor="password"></label> <br />
     <input type="password" id="password"  onChange={(e)=>{setPass(e.target.value)}} placeholder="password" ref={passRef}/>
     
     <br />
     <p onClick={handlechange}><u>Already I Have Account Login</u></p>
     <br />
     <button className={STYLE.btn}  >signup</button>

</div>
    </form>
}


   </>
  )
}
export default Signup