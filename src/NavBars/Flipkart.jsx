import React from "react";
import STYLE from "./flipkart.module.css"
const Flipkart=()=>
{
  return(
   <div className={STYLE.main}>
    <ul>
      <li><p><std>Flipkart</std> explore plus+</p> </li>
      <li><input type="search" placeholder="Search or product, Brand and more"/></li>
      <li><button>Login</button></li>
      <li><button>Become a Seller</button></li>
      <li>Cart</li>
    </ul>
   </div>
  )
}
export default Flipkart;