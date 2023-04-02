import React,{useRef,useState} from "react";
import VIDEO from "./video1.mp4"
const Video=()=>
{
 let [video,setVideo]=useState(VIDEO)
 let [loading ,setLoading]=useState(false)
 let videoRef=useRef()

 let playorPause=()=>
 {
  if(loading===false)
  {
    setLoading(true)
    videoRef.current.play()
    
  }
  else{
    setLoading(false)
    videoRef.current.pause()
  }
 }


  return(
    <>
    <video src={video} onClick={playorPause} height="200px" width="300px" ref={videoRef}></video>
    </>
  )
}
export default Video