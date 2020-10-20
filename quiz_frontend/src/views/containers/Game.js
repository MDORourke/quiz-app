import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core";

import QuestionScreen from "./QuestionScreen";
import SubmitScreen from "../components/SubmitScreen";

const styles = () => ({
  fullScreen: {
    height: "100vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { roundConfig, complete, classes } = this.props;

    const round = roundConfig.rounds[1];

    return (
      <div className={classes.fullScreen}>
        {complete && <SubmitScreen />}
        {!complete && (
          <QuestionScreen
            questions={round.questions}
            numSlides={round.questions.length}
          />
        )}
      </div>
    );
  }
}

const { object, bool } = PropTypes;

Game.propTypes = {
  roundConfig: object.isRequired,
  complete: bool.isRequired,
};

const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    complete: gameState.complete,
  };
};

const StyledGame = withStyles(styles)(Game);

export default connect(mapStateToProps)(StyledGame);
