import React from "react";
import STYLE from "react-dom/client"  
const Gaana=()=>
{
  return(
    <div className={STYLE.main}>
       <div className={STYLE.logo}>
        <ul>
          <li><img src="https://d39w11zmd7f11d.cloudfront.net/wp-content/uploads/2019/10/Gaana-inline.jpg" alt="" /></li>
          <li><input type="text" placeholder="Search,Artist,Albumbs,Song" /></li>
        </ul>
       </div>
       <div className={STYLE.menu}>
        <ul>
          <li><button>Go Add Free</button></li> 
          <li><button>Get Gaana Plus</button></li>  
          <li><button>Login/</button><button>Signup</button></li> 
        </ul>
       </div>
    </div>
  )
}
export default Gaana