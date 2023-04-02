import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import Nav from "./Nav"
import Home from "./Home";
import Welcome from "./Welcome";
const Home1=()=>{


  return(
    <div  >
    
  <BrowserRouter >
    <Nav/>
    <Routes >
       
   
    <Route  path="/"  element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/logout"  element={<Logout/>}/>
    <Route path="/welcome"  element={<Welcome/>}/>

    <Route path="*"  element={<Error/>}/>
  
 </Routes>

 </BrowserRouter>
 
 
  
  </div>
  )
}
export default Home1