import React, { Component } from 'react';
import Modal from './Modal';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score : 0,
      answer: this.randomAnswer(),
      problems: this.randomRgbArr(),
      activeItem: {},
      modal: null
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
        modal: true
      }));
    }else{
      // 오답시
      this.setState({
        score: 0,
        modal: false
      });
    }
    // 공통
    this.setState({
      activeItem: { [i]: true }
    });
    console.log(this.state)
  }

  handleNext(){
    // 다음 문제 제출
    this.setState({
      answer: this.randomAnswer(),
      problems: this.randomRgbArr(),
      activeItem: {},
      modal: null
    });
  }

  render() {
    const { problems, score, answer, activeItem, modal} = this.state;
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
        <Modal modal={modal} onNext={() => this.handleNext()} score={score}/>
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
