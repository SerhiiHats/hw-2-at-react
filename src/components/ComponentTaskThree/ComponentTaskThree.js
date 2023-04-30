import {Component} from "react";
import "./ComponentTaskThree.css"

class ComponentTaskThree extends Component{

  state={
    color: "indigo"
  }
  setColor(){
    this.setState({
      color: this.getRandomColor()
    })
  }

  getRandomColor(){
    let rnd = ()=> Math.floor(Math.random() * 256);
    return `rgb(${rnd()}, ${rnd()}, ${rnd()})`;
  }

  render() {
    const {text} = this.props;
    return (
      <div className={"ComponentTaskThree"}>
        <div onClick={()=>this.setColor()} style={{color:this.state.color}}>{text}  Click me to check my color!</div>
      </div>
    );
  }
}

export default ComponentTaskThree;