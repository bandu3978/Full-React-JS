import React from "react";
import HocCBC from "./HocCBC";
import HocFBC from "./HocFBC";
 const AppHOC=(props)=>{
return(
  <>
   <h1>{props.data2}</h1>
   <h1>{props.data1}</h1>
  </>
)

 }
 //export default HocFBC(AppHOC)
 export default HocCBC(AppHOC)