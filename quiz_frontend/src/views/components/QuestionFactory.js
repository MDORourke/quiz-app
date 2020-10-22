import React from "react";
import PropTypes from "prop-types";

import QuestionList from "./QuestionList";
import QuestionText from "./QuestionText";
import QuestionVideo from "./QuestionVideo";

const QuestionFactory = ({ question }) => {
  switch (question.type) {
    case "list":
      return <QuestionList props={question.props} />;
    case "text":
      return <QuestionText props={question.props} />;
    case "video":
      return <QuestionVideo props={question.props} />;
    default:
      return <div>Invalid Question Type!</div>;
  }
};

const { shape, string, object } = PropTypes;

QuestionFactory.propTypes = {
  question: shape({
    type: string.isRequired,
    props: object.isRequired,
  }),
};

export default QuestionFactory;
