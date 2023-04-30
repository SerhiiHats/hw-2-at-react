import './App.css';
import React, {Component} from 'react';
import Header from "../Header/Header";
import ComponentTaskOne from "../ComponentTaskOne/ComponentTaskOne";
import ComponentTaskTwo from "../ComponentTaskTwo/ComponentTaskTwo";
import ComponentTaskThree from "../ComponentTaskThree/ComponentTaskThree";

class App extends Component {
  state = {
    aboutTask1: "React: Домашнє завдання 2. Завдання 3",
    aboutTask2: "React: Домашнє завдання 2. Завдання 4",
    aboutTask3: "React: Домашнє завдання 2. Завдання 5",
    descriptionTask1: "Створіть компонент, який прийматиме параметром рядка та зображатиме їх у різних блоках div.",
    descriptionTask2: "Створіть компонент, який буде рендерити те, що йому передадуть як children.",
    descriptionTask3: "Створіть застосунок за допомогою Create React App і виведіть на сторінку текст «Hello world».",
    teacherName: "Julia",
    colorsOfRainbow: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    text: "Hello world."
  }
  render() {

    return (
      <div className="App">
        <Header aboutTask={this.state.aboutTask1} descriptionTask={this.state.descriptionTask1}/>
        <ComponentTaskOne teacherName={this.state.teacherName}/>
        <Header aboutTask={this.state.aboutTask2} descriptionTask={this.state.descriptionTask2}/>
        <ComponentTaskTwo colorsOfRainbow={this.state.colorsOfRainbow}/>
        <Header aboutTask={this.state.aboutTask3} descriptionTask={this.state.descriptionTask3}/>
        <ComponentTaskThree text={this.state.text}/>
      </div>
    );
  }
}

export default App;
