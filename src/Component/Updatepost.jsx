import React,{useState} from "react";
import axiosInstance from "../Helper/axiosInstance";
import {useParams} from 'react-router-dom'
import { useEffect } from "react";
const Updatepost=()=>{

  let [coursename,setCoursename]=useState("")
  let [authorname,setAuthorname]=useState("")
  
  let {id}=useParams()
  
 let updateposts=async(e)=>{
  e.preventDefault()
  let payload={coursename,authorname}
  await axiosInstance.put(`posts/${id}`,payload)
  window.location.assign('/viewposts')
 }
  
 useEffect(()=>{
  let fetchdata=async()=>{
    let {data}=await axiosInstance.get(`/posts/${id}`)
    setCoursename(data.coursename)
    setAuthorname(data.authorname)
  }
  fetchdata()
 },[])
  return(
    <div>
      <form action="" onSubmit={updateposts}>
       <fieldset>
         <legend>UPDATE POST</legend>
          <label htmlFor="coursename">CourseName:</label>
          <input value={coursename} type="text" id="coursename" onChange={(e)=>{setCoursename(e.target.value)}} /> <br /><br />
          <label htmlFor="authorname">AuthorName:</label>
          <input value={authorname} type="text" id="authorname" onChange={(e)=>{setAuthorname(e.target.value)}} /> <br /> <br />
          <button>SUBMIT</button> 
       </fieldset>
      </form>
    </div>
  )
}
export default Updatepost