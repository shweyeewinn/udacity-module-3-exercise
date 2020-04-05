import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3]
    };
  }

  makeNewQuestion = () => {
    const v1 = Math.floor(Math.random() * 100);
    const v2 = Math.floor(Math.random() * 100);
    const v3 = Math.floor(Math.random() * 100);
    const p = Math.floor(Math.random() * 3) + (v1 + v2 + v3);
    return [v1, v2, v3, p];
  }

  updateNewQuestion = (newValuesArray) => {
    this.setState({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    })

  }
  handleClick = (userAnswer) => {
    const newValuesArray = this.makeNewQuestion();
    this.updateNewQuestion(newValuesArray);

    const answerIsCorrect = this.checkAnswer(userAnswer);
    this.props.handleScore(answerIsCorrect);
  }


  checkAnswer = (userAnswer) => {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const correctAns = value1 + value2 + value3;
    return (correctAns === proposedAnswer && userAnswer === 'true') || (correctAns !== proposedAnswer && userAnswer === 'false');

  }

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">
            {`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
          </p>
        </div>
        <button onClick={(e) => this.handleClick(e.target.name)} name="true">True</button>
        <button onClick={(e) => this.handleClick(e.target.name)} name="false">False</button>
      </div>
    );
  }
}

export default Game;