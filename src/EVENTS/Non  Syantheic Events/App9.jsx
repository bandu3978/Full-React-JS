import React,{Component} from "react";

export default class App9 extends Component
{
  constructor()
  {
    super()
    this.state={
      userName:""
    }
  }
  componentDidMount()
  {
    let input=document.querySelector("input")
    input.addEventListener("keyup",(e)=>{
      this.setState({userName:e.target.value})
    })

  }
  render()
  {
    return(
      <>
      <h1>{this.state.userName}</h1>
      <input type="text" />
      </>
    )
  }
}