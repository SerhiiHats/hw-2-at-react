import {Component} from "react";
import "./ComponentTaskOne.css"

class ComponentTaskOne extends Component {
  render() {
    const {teacherName} = this.props;

    return (
      <div className={"ComponentTaskOne"}>
        <h2>Hello, {teacherName}</h2>
        <div>{teacherName}, please check my homework!</div>
        <div>Do you will check it? If yes, {teacherName}, rate me.</div>
        <div>And also, {teacherName}, please write me your comment.</div>
      </div>
    )
  }
}

export default ComponentTaskOne;