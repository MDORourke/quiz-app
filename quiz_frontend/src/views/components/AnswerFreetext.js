import React from "react";

import PropTypes from "prop-types";

import { TextField, Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  caption: {
    paddingRight: "2%",
  },
  answer: {
    paddingBottom: "1%",
    verticalAlign: "middle",
  },
});

const AnswerFreetext = ({ props, answerValue, onAnswerChange, classes }) => (
  <div>
    <Typography variant="overline" className={classes.caption}>
      {props.caption}
    </Typography>
    <TextField
      variant="filled"
      className={classes.answer}
      defaultValue={answerValue}
      onChange={(event) => onAnswerChange(event.target.value)}
    />
  </div>
);

const { shape, string, object, func } = PropTypes;

AnswerFreetext.propTypes = {
  props: shape({
    caption: string.isRequired,
  }),
  answerValue: string,
  onAnswerChange: func.isRequired,
  classes: object.isRequired,
};

export default withStyles(styles)(AnswerFreetext);
