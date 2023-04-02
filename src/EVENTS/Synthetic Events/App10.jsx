import React,{Component} from "react";

export default class App10 extends Component
{
  constructor()
  {
    super()
    this.state={
      userName:""
    }
  }
  
  render()
  {
    return(
      <>
      <h1>{this.state.userName}</h1>
      <input type="text" onKeyUp={(e)=>{
        this.setState({userName:e.target.value})
      }} />
      </>
    )
  }
}