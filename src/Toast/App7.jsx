import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const App7=()=>{
  let handleSubmit=()=>{
   toast.success("Logged in successfully",{
  // toast.error("Getting Some Error"),
  // toast.loading("Loading..........."),{
  
   POSITION:toast.POSITION.TOP_CENTER,
  })}
return(
  <>
  <ToastContainer /> 
  <button onClick={handleSubmit}>Click For Messege</button>

  </>
)
}
export default App7