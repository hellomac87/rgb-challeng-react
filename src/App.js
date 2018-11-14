import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0,
      answer: this.randomAnswer(),
      problems: this.randomRgbArr(),
      activeItem: {}
    }
  }

  randomRgb() {
    return `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
  }
  randomRgbArr(){
    return [`rgb(${this.randomRgb()})`, `rgb(${this.randomRgb()})`, `rgb(${this.randomRgb()})`];
  } 
  randomAnswer(){
    return Math.floor(Math.random() * 3)
  }
  handleClick(i){
    if(this.state.answer === i){
      // 정답시
      this.setState((prevState) => ({ 
        score: prevState.score + 100,
      }));
    }else{
      // 오답시
      this.setState({
        score: 0
      });
    }
    // 공통
    this.setState({
      activeItem: { [i]: true }
    });
      
  }

  render() {
    const { problems, score, answer, activeItem} = this.state;
    const circles = problems.map((problem, index) => {
      return (
        <Circle 
        key={index} 
        onClick={() => this.handleClick(index)} 
        style={problem}
        toggleClass={activeItem[index] ? 'circle active' : 'circle'}
        />
      )
    })
    return (
      <div className="App">
        <div className="score">score: {score} </div>
        <div className="answer">{problems[answer]}</div>
        <div className="circle-wrap">
          {circles}
        </div>
      </div>
    );
  }
}

const Circle = (props) => {
  return (
    <div className={props.toggleClass} onClick={props.onClick} style={{ backgroundColor: props.style }}/>
  )
}

export default App;
