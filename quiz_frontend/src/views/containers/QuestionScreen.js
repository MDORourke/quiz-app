import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core";

import { gameOperations } from "../../state/ducks/game";

import QuestionTitle from "../components/QuestionTitle";
import QuestionFactory from "../components/QuestionFactory";
import AnswerFactory from "../components/AnswerFactory";

const styles = () => ({
  fullScreen: {
    height: "100vh",
  },
  centered: {
    textAlign: "center",
  },
  arrow: {
    cursor: "pointer",
  },
});

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Going to attempt to store the answer state locally to the question screen, we'll see how that goes...
      answers: {},
    };
  }

  handleArrowClick(slide) {
    this.props.moveToSlide(slide);
  }

  handleAnswerChange(key, answer) {
    const { answers } = this.state;

    answers[key] = answer;

    this.setState({
      answers: answers,
    });
  }

  handleSubmitButtonClick() {
    this.props.submitAnswers();
  }

  render() {
    const { questions, numSlides, classes, slide } = this.props;
    const { answers } = this.state;

    const isFirstSlide = slide === 1;
    const isLastSlide = slide === numSlides;
    const previousSlide = slide - 1;
    const nextSlide = slide + 1;

    const currentQuestion = questions[slide - 1];

    return (
      <Grid container spacing={3} className={classes.fullScreen}>
        <Grid item xs={12}>
          <QuestionTitle>{currentQuestion.questionText}</QuestionTitle>
        </Grid>
        <Grid item xs={12} className={classes.centered}>
          <QuestionFactory
            questionType={currentQuestion.questionType}
            questionProps={currentQuestion.questionProps}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs className={classes.centered}>
              {!isFirstSlide && (
                <Icon
                  onClick={() => this.handleArrowClick(previousSlide)}
                  className={classes.arrow}
                >
                  arrow_back
                </Icon>
              )}
            </Grid>
            <Grid item xs={10} className={classes.centered}>
              {currentQuestion.answers.map((answer, index) => {
                const answerKey = `${slide}_${index}`;
                const answerValue = answers[answerKey]
                  ? answers[answerKey]
                  : "";
                return (
                  <AnswerFactory
                    key={answerKey}
                    answer={answer}
                    answerValue={answerValue}
                    onAnswerChange={(newValue) =>
                      this.handleAnswerChange(answerKey, newValue)
                    }
                  />
                );
              })}
            </Grid>
            <Grid item xs className={classes.centered}>
              {!isLastSlide && (
                <Icon
                  onClick={() => this.handleArrowClick(nextSlide)}
                  className={classes.arrow}
                >
                  arrow_forward
                </Icon>
              )}
              {isLastSlide && (
                <Button onClick={() => this.handleSubmitButtonClick()}>
                  SUBMIT ANSWERS
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const { arrayOf, object, number, func } = PropTypes;

QuestionScreen.propTypes = {
  questions: arrayOf(object).isRequired,
  classes: object.isRequired,
  numSlides: number.isRequired,
  slide: number.isRequired,
  moveToSlide: func.isRequired,
  submitAnswers: func.isRequired,
};

const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    slide: gameState.slide,
  };
};

const mapDispatchToProps = {
  moveToSlide: gameOperations.moveToSlide,
  submitAnswers: gameOperations.submitAnswers,
};

const StyledScreen = withStyles(styles)(QuestionScreen);

export default connect(mapStateToProps, mapDispatchToProps)(StyledScreen);
