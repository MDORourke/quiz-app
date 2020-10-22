import React from "react";
import PropTypes from "prop-types";

import { Typography } from "@material-ui/core/";

const QuestionText = ({ props }) => (
  <Typography variant="h2">{props.text}</Typography>
);

const { string, shape } = PropTypes;

QuestionText.propTypes = {
  props: shape({
    text: string.isRequired,
  }),
};

export default QuestionText;
