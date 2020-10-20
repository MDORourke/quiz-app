import React from "react";
import PropTypes from "prop-types";

import QuestionText from "./QuestionText";
import QuestionVideo from "./QuestionVideo";

const QuestionFactory = ({ questionType, questionProps }) => {
  switch (questionType) {
    case "text":
      return <QuestionText props={questionProps} />;
    case "video":
      return <QuestionVideo props={questionProps} />;
    default:
      return <div>Invalid Question Type!</div>;
  }
};

const { string, object } = PropTypes;

QuestionFactory.propTypes = {
  questionType: string.isRequired,
  questionProps: object.isRequired,
};

export default QuestionFactory;
