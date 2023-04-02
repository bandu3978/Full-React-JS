import React,{Component} from "react";

export default class App8 extends Component
{
  constructor()
  {
    super()
    this.state={
      userName:"upendra"
    }
  }
  componentDidMount()
  {
    let btn=document.querySelector("button")
    btn.addEventListener("click",()=>{
      this.setState({userName : this.state.userName="Prajakiya"})
    })

  }
  render()
  {
    return(
      <>
      <h1>{this.state.userName}</h1>
      <button>Change</button>
      </>
    )
  }
}