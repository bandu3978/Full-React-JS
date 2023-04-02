import React,{useState,useEffect} from "react";
import axiosInstance from "../Helper/axiosInstance";
import {Link} from 'react-router-dom'

const Viewposts=()=>{
 let [data,setData]=useState([])

 useEffect(()=>{
 let fetchData=async()=>{
  let {data}=await axiosInstance.get("/posts")
  setData(data)
 }
 fetchData()
 },[])

 let deleteData=async(id)=>{
  await axiosInstance.delete(`posts/${id}`)
  window.location.assign('/viewposts')
 }
  
 let handledata=()=>{
  window.location.assign('/')
 }

 return(
    <div style={{display:"flex"}}>
      {data.map((x)=>{
        return(
          <div style={{border:"2px solid",width:"40%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>{x.coursename}</h1>
            <h2>{x.authorname}</h2>
            <Link to={`/updatepost/${x.id}`}>UPDATE</Link>
            <button onClick={()=>{deleteData(x.id)}}>DELETE</button>
            <button onClick={handledata}>ADD DATA</button>
          </div>
        )
      })}

    </div>
  )
}
export default Viewposts