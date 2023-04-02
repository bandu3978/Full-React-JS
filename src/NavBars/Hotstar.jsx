import React from "react";
import STYLE from "./hotstar.module.css"


const Hotstar=()=>
{
  return(
 <div className={STYLE.main}>
  <div className={STYLE.logo}>
    
 <img  src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/02/17/1155554-ezgif.com-gif-maker-20.jpg" alt="" />
   <ul>
    
    <li><a href="">TV</a></li> 
    <li><a href="">Movie</a></li> 
    <li><a href="">Sports</a></li>
    <li><a href="">Disney+</a></li>
    <li><a href="">KiDS</a></li>
</ul>
  </div>
  <div className={STYLE.menu}>
    <ul>
      <li><input type="search" placeholder="Search" /></li>
      <li><button className={STYLE.sub}>SUBSCRIBE</button></li>
      <li><button>Login</button></li>
      </ul>
  </div>
 </div>


  )
}
export default Hotstar
