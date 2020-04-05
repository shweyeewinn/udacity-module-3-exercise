import React from 'react';
import Game from './Game';
import Score from './Score';

class RandomNumbersGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      answeredQuestions: 0
    };
  }

  handleScore = (answer) => {
    if (answer) {
      this.setState(prevState => ({
        correctAnswers: prevState.correctAnswers + 1
      }));
    }

    this.setState(prevState => ({
      answeredQuestions: prevState.answeredQuestions + 1
    }));

  }

  render() {
    const { correctAnswers, answeredQuestions } = this.state;
    return (
      <>
        <Game handleScore={this.handleScore} />
        <Score correctAnswers={correctAnswers} answeredQuestions={answeredQuestions} />
      </>
    );
  }
}

export default RandomNumbersGame;




