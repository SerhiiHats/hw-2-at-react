import {Component} from "react";
import "./ComponentTaskTwo.css"

class ComponentTaskTwo extends Component{

  render() {
    const {colorsOfRainbow} = this.props;

    const elemLi = colorsOfRainbow.map((elem, index)=>{
      return <li style={{color:elem}} className={"item-color-" + index} key={index}>{elem}</li>
    })
    return (
      <div className={"ComponentTaskTwo"}>
        <ul>
          {elemLi}
        </ul>
      </div>
    );
  }
}

export default ComponentTaskTwo;