import React, { Component } from "react";
import "../assets/style.css";
import quizService from "./quizService/quizService";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import ResultQuiz from "../Components/ResultQuiz/ResultQuiz";
import Draggable from "react-draggable";

class Quiz extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({ questionBank: question });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <Draggable>
      <div className="container9">
        <div className="titleQuiz">Quiz</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <ResultQuiz score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
      </Draggable>
    );
  }
}

export default Quiz;
