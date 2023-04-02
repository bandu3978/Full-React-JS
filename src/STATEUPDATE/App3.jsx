import React,{Component} from "react";

export default class App3 extends Component
{
  constructor()
  {
    super()
    this.state={
      username : "Amit"
    }
  }
  handleChange=()=>
  {
    this.setState({username : "AMIT NAGESH"})
  }
  render()
  {
    return(
      <>
      <h1>{this.state.username}</h1>
      <button onClick={this.handleChange}>Change Name</button>
      </>
    )
  }
}