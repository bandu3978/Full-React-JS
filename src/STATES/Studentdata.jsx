import React from "react";


const Studentdata=(props)=>
{
  let data=props.data
 return(
  <div>
  <table border="3px" style={{textAlign:"center",fontWeight:"bold",backgroundColor:"yellowgreen"}}>
  <tr>
  <th>StudentName</th>
  <th>StudentId</th>
  <th>Course</th>
  <th>Place</th>
  <th>Mobile</th>
  <th>Photo</th>
</tr>
{data.map((x)=>
{
  return <tr>
     <td>{x.StudentName}</td>
     <td>{x.StudentId}</td>
     <td>{x.Course}</td>
     <td>{x.Place}</td>
     <td>{x.Mobile.map((x)=>{
      return <li>{x}</li>
     })}</td>
     <td><img src={x.photo} alt="" height="80px" width="80px"/></td>
    </tr>
  
})}
  </table>
  </div>
 )


}
export default Studentdata