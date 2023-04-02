import React,{Component,createRef} from "react";

export default class App13 extends Component
{
  constructor()
  {
    super()
    this.state={
      company: "QSPIDER"
    }
    this.spanRef=createRef()
    this.btnRef=createRef()

  }
  render()
  {
    return(
      <div>
  <span ref={this.spanRef}>{this.state.company}</span><br />
  <button ref={this.btnRef} onClick={()=>{this.setState({company:"JSPIDER"})
   this.spanRef.current.style.color="orange"
   this.spanRef.current.style.padding="20px"
   this.btnRef.current.style.color="red"
   this.btnRef.current.style.backgroundColor="blue"
   this.btnRef.current.style.borderRadius="20px"
}}>Click To Change</button>

      </div>
    )
  }
} 