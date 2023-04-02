import React,{Component} from "react";
import JSON from "./Student.json"
import Studentdata from "./Studentdata.jsx";
class App1 extends Component
{
  constructor()
  {
    super()
    {this.state={
      json : JSON
    }}
  }
  render()
  {
    return(
  <div>
  <Studentdata data={this.state.json} />
  
  </div>
    )
  }
}
export default App1