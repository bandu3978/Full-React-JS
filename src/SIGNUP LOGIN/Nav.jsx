import React from "react";
import { Link } from "react-router-dom";
import IMG from "./raj.jpg"
 const Nav=()=>{
 return(
  <>
  <div style={{backgroundColor:"black",border:"2px solid blue",justifyContent:"space-between",display:"flex",textAlign:"center",borderRadius:"20px"}} >
     <div ><img src={IMG} alt="" height="50px" width="150px" /></div>
     <div style={{display:"flex",width:"300px"}}>
      <ol style={{display:"flex",justifyContent:"space-evenly",listStyle:"none",width:"300px"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ol>

     </div>
  </div>
  
  </>
 )
 }
 export default Nav