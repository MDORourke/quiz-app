import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, Grid, Icon, withStyles } from "@material-ui/core";

import { gameOperations } from "../../state/ducks/game";

import QuestionTitle from "../components/QuestionTitle";
import QuestionFactory from "../components/QuestionFactory";
import AnswerFactory from "../components/AnswerFactory";
import SubmitScreen from "../components/SubmitScreen";

const styles = () => ({
  fullScreen: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  centered: {
    textAlign: "center",
    alignItems: "center",
  },
  arrow: {
    cursor: "pointer",
  },
});

class RoundScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Going to attempt to store the answer state locally to the question screen, we'll see how that goes...
      answers: {},
    };
  }

  handleAnswerChange(key, answer) {
    const { answers } = this.state;

    answers[key] = answer;

    this.setState({
      answers: answers,
    });
  }

  handleSubmitButtonClick() {
    const { socket, playerName, screenRef } = this.props;
    const { answers } = this.state;

    this.props.submitAnswers(socket, playerName, screenRef, answers);
  }

  render() {
    const { props, currentSlide, complete, moveToSlide, classes } = this.props;
    const { answers } = this.state;

    const { questions, direction } = props;

    const isFirstSlide = currentSlide === 1;
    const isLastSlide = currentSlide === questions.length;
    const previousSlide = currentSlide - 1;
    const nextSlide = currentSlide + 1;

    const question = questions[currentSlide - 1];

    const questionAnswerSpacing = direction && direction === "column" ? 6 : 12;

    return (
      <div>
        {complete && <SubmitScreen />}
        {!complete && (
          <Grid container spacing={3} className={classes.fullScreen}>
            <Grid item xs={12}>
              <QuestionTitle>{question.title}</QuestionTitle>
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.centered}>
                <Grid item xs>
                  {!isFirstSlide && (
                    <Icon
                      onClick={() => moveToSlide(previousSlide)}
                      className={classes.arrow}
                    >
                      arrow_back
                    </Icon>
                  )}
                </Grid>
                <Grid item xs={10}>
                  <Grid container spacing={10}>
                    <Grid item xs={questionAnswerSpacing}>
                      <QuestionFactory question={question} />
                    </Grid>
                    <Grid item xs={questionAnswerSpacing}>
                      {question.answers.map((answer, index) => {
                        const answerKey = `${currentSlide}_${index}`;
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
                  </Grid>
                </Grid>
                <Grid item xs>
                  {!isLastSlide && (
                    <Icon
                      onClick={() => moveToSlide(nextSlide)}
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
        )}
      </div>
    );
  }
}

const { string, shape, arrayOf, object, number, func, bool } = PropTypes;

RoundScreen.propTypes = {
  props: shape({
    direction: string,
    questions: arrayOf(
      shape({
        title: string.isRequired,
        type: string.isRequired,
        props: object.isRequired,
        answers: arrayOf(
          shape({
            type: string.isRequired,
            props: object.isRequired,
          })
        ),
      })
    ),
  }),
  currentSlide: number.isRequired,
  complete: bool.isRequired,
  playerName: string.isRequired,
  screenRef: string.isRequired,
  socket: object.isRequired,
  moveToSlide: func.isRequired,
  submitAnswers: func.isRequired,
  classes: object.isRequired,
};

const mapStateToProps = (state) => {
  const { gameState, socketState, screenState } = state;

  return {
    currentSlide: gameState.currentSlide,
    playerName: gameState.playerName,
    complete: gameState.complete,
    screenRef: screenState.screenRef,
    socket: socketState.socket,
  };
};

const mapDispatchToProps = {
  moveToSlide: gameOperations.moveToSlide,
  submitAnswers: gameOperations.submitAnswers,
};

const StyledScreen = withStyles(styles)(RoundScreen);

export default connect(mapStateToProps, mapDispatchToProps)(StyledScreen);
