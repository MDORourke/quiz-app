import React from "react";
import PropTypes from "prop-types";

import AnswerFreetext from "./AnswerFreetext";
import AnswerList from "./AnswerList";
import AnswerOptions from "./AnswerOptions";

const AnswerFactory = ({ answer, answerValue, onAnswerChange }) => {
  switch (answer.type) {
    case "freetext":
      return (
        <AnswerFreetext
          props={answer.props}
          answerValue={answerValue}
          onAnswerChange={onAnswerChange}
        />
      );
    case "list":
      return (
        <AnswerList props={answer.props} onAnswerChange={onAnswerChange} />
      );
    case "options":
      return (
        <AnswerOptions
          props={answer.props}
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
    type: string.isRequired,
    props: object.isRequired,
  }),
  onAnswerChange: func.isRequired,
};

export default AnswerFactory;
