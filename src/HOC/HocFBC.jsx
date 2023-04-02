import React from "react";

const HocFBC=(WrappedComponent)=>{
  return(()=>{
   return(<WrappedComponent data1="Hello"/>)
  })
}
export default HocFBC