import React,{useState} from "react";
import axiosInstance from "../Helper/axiosInstance";

const Createpost=()=>{
let [coursename,setCoursename]=useState("")
let [authorname,setAuthorname]=useState("")


let handleSubmit= async (e)=>{
  e.preventDefault()
  try{
    let payload={coursename,authorname}
     await axiosInstance.post("/posts",payload)
    window.location.assign('/viewposts')
  }
  catch{
    console.log("UNABLE TO CONNECT TO SERVER");
  }
}

return(
  <div>
    <form action="" onSubmit={handleSubmit}>
     <fieldset>
       <legend>CREATE POST</legend>
        <label htmlFor="coursename">CourseName:</label>
        <input type="text" id="coursename" onChange={(e)=>{setCoursename(e.target.value)}} /> <br /><br />
        <label htmlFor="authorname">AuthorName:</label>
        <input type="text" id="authorname" onChange={(e)=>{setAuthorname(e.target.value)}} /> <br /> <br />
        <button>SUBMIT</button> 
     </fieldset>
    </form>
  </div>
)
}
export default Createpost