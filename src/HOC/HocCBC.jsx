import React,{Component} from "react";

const HocCBC=(WrappedComponent)=>{
  return(class HocCBC extends Component{
    render()
    {
      return(<WrappedComponent data2="hi"/>)
    }
  })
}
export default HocCBC
