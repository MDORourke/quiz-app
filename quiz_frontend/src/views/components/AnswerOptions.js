import React from "react";

import PropTypes from "prop-types";

import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

const AnswerOptions = ({ props, answerValue, onAnswerChange }) => (
  <ToggleButtonGroup
    orientation="vertical"
    exclusive={true}
    value={answerValue ? answerValue : null}
    onChange={(event, value) => {
      onAnswerChange(value);
    }}
  >
    {props.options.map((text) => {
      return (
        <ToggleButton key={text} value={text}>
          {text}
        </ToggleButton>
      );
    })}
  </ToggleButtonGroup>
);

const { shape, arrayOf, string, func } = PropTypes;

AnswerOptions.propTypes = {
  props: shape({
    options: arrayOf(string).isRequired,
  }),
  answerValue: string,
  onAnswerChange: func.isRequired,
};

export default AnswerOptions;
