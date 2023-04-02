import React from "react";
import STYLE from "./logout.module.css"
const Logout=()=>{

  let handlelogout=()=>{
    window.location.assign('./login')
  }
  return(
    <div className={STYLE.form}>
    <h3 onClick={handlelogout}><u> Are You Want  Sure to Logout</u></h3>
   
  </div>
    
  )
}
export default Logout