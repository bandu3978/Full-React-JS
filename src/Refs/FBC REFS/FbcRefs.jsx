import React,{useRef} from "react";

const FbcRefs=()=>
{
  let h1Ref=useRef()
let handleChange=()=>{
 h1Ref.current.style.color="red"
}


  return(
    <>
    <h1 ref={h1Ref}>APP FBC REFS COMPONENTS</h1>
    <button onClick={handleChange}>Change</button>
    </>
  )
}
export default FbcRefs