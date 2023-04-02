import React from "react";


const Jotirlinga=(props)=>
{
  return(

    <div>
      <div >
        <img src={props.data[0].image} alt="" />
        <h2>{props.data[0].name}</h2>
        <h2>{props.data[0].place}</h2>
        <h2><a href={props.data[0].officialpage}>Official page</a></h2>
        <h2><a href={props.data[0].wikipedia}>Wikipedia</a></h2>
        <h2><a href={props.data[0].map}>Map &#xf041;</a></h2>
      </div>
    </div>
  )
}
export default Jotirlinga;