import React,{useState,useEffect} from "react";

const UseEffectJSON=()=>{
 let [useData,setUseData]=useState([])

 useEffect(()=>{
 window.fetch("https://api.github.com/users")
 .then((x)=>x.json())
 .then((data)=>setUseData(data))
 .catch((err)=>err)
 
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
export default UseEffectJSON