import React,{Component} from "react";
import "./globle.css"
export default class App2 extends Component
{
  constructor()
  {
    super()
    this.state={
      count : 0
    }
  }
handleIncreament=()=>
{
  this.setState({count : this.state.count+1})
}
handleDecreament=()=>
{
  this.setState({count : this.state.count-1})
}
handleReset=()=>
{
  this.setState({count:0})
}
render()
{
  return(
    <div className="main">
    <div className="out1">
    <h1>{this.state.count}</h1>
    </div>
    <div className="out2">
     <button className="b1" onClick={this.handleIncreament}>INCREAMENT</button>
     <button className="b2" onClick={this.handleDecreament}>DECREAMENT</button>
     <button className="b3" onClick={this.handleReset}>RESET</button>
    </div>
    </div>
  )
}

}