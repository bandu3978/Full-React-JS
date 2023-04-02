import React,{useState,useRef} from "react";
import IMG from "./abc.jpg"
import IMG1 from "./aa.jpg"

const OnOffLogic=()=>
{
 let [photo,setPhoto]=useState(IMG)
 let [loading ,setLoaing]=useState(true)
 let imageRef=useRef()

 let handleChane=()=>
 {
  if(loading==true)
  {
     setPhoto(IMG1)
     setLoaing(false)
    imageRef.current.style.border="20px solid"
  }
  else{
    setPhoto(IMG)
    setLoaing(true)
    imageRef.current.style.border="20px solid"
  }
 }


  return(

  <>
  <img src={photo} alt="" height="200px" width="200px" ref={imageRef}/>
  <button onClick={handleChane}>{loading ? "ON" : "OFF" }</button>
  </>
  )
}
export default OnOffLogic