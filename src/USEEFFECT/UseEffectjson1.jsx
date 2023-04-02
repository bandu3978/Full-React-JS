import React,{useState,useEffect} from "react";

const UseEffectjson1=()=>{
 let [useData,setUseData]=useState([])

 useEffect(()=>{
 let fetchdata=async()=>{
  let data=  await window.fetch("https://api.github.com/users")
  let finaldata= await data.json()
   setUseData(finaldata)
 }
 fetchdata()
 },[])

  return(
    <div>
   <h3> {useData.map((a,index)=>{
      return(
        <li key={index}>{a.login}</li>
      )
    })}
    </h3>
    </div>
  )
}
export default UseEffectjson1