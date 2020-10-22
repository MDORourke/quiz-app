import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Grid, Icon, Typography, withStyles } from "@material-ui/core";

import { gameOperations } from "../../state/ducks/game";

const styles = () => ({
  centered: {
    textAlign: "center",
    alignItems: "center",
  },
  arrow: {
    cursor: "pointer",
  },
});

class TextScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props, currentSlide, moveToSlide, classes } = this.props;

    const { slides } = props;

    const isFirstSlide = currentSlide === 1;
    const isLastSlide = currentSlide === slides.length;
    const previousSlide = currentSlide - 1;
    const nextSlide = currentSlide + 1;

    const slide = slides[currentSlide - 1];

    return (
      <Grid container className={classes.centered} spacing={3}>
        <Grid item xs>
          {!isFirstSlide && (
            <Icon
              className={classes.arrow}
              onClick={() => moveToSlide(previousSlide)}
            >
              arrow_back
            </Icon>
          )}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h2">{slide}</Typography>
        </Grid>
        <Grid item xs>
          {!isLastSlide && (
            <Icon
              className={classes.arrow}
              onClick={() => moveToSlide(nextSlide)}
            >
              arrow_forward
            </Icon>
          )}
        </Grid>
      </Grid>
    );
  }
}

const { string, shape, arrayOf, object, number, func } = PropTypes;

TextScreen.propTypes = {
  props: shape({
    slides: arrayOf(string).isRequired,
  }),
  currentSlide: number.isRequired,
  moveToSlide: func.isRequired,
  classes: object.isRequired,
};

const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    currentSlide: gameState.currentSlide,
  };
};

const mapDispatchToProps = {
  moveToSlide: gameOperations.moveToSlide,
};

const StyledScreen = withStyles(styles)(TextScreen);

export default connect(mapStateToProps, mapDispatchToProps)(StyledScreen);
