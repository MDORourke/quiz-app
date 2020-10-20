import React from "react";
import PropTypes from "prop-types";

import AnswerFreetext from "./AnswerFreetext";
import AnswerOptions from "./AnswerOptions";

const AnswerFactory = ({ answer, answerValue, onAnswerChange }) => {
  switch (answer.answerType) {
    case "freetext":
      return (
        <AnswerFreetext
          props={answer.answerProps}
          answerValue={answerValue}
          onAnswerChange={onAnswerChange}
        />
      );
    case "options":
      return (
        <AnswerOptions
          props={answer.answerProps}
          answerValue={answerValue}
          onAnswerChange={onAnswerChange}
        />
      );
    default:
      return <div>Invalid Answer Type!</div>;
  }
};

const { shape, string, object, func } = PropTypes;

AnswerFactory.propTypes = {
  answer: shape({
    answerType: string.isRequired,
    answerProps: object.isRequired,
  }),
  onAnswerChange: func.isRequired,
};

export default AnswerFactory;
