import React from "react";
import PropTypes from "prop-types";

import TextScreen from "../containers/TextScreen";
import RoundScreen from "../containers/RoundScreen";

const ScreenFactory = ({ screen }) => {
  switch (screen.type) {
    case "text":
      return <TextScreen props={screen.props} />;
    case "round":
      return <RoundScreen props={screen.props} />;
    default:
      return <div>No screen type specified</div>;
  }
};

const { shape, string, object } = PropTypes;

ScreenFactory.propTypes = {
  screen: shape({
    type: string.isRequired,
    props: object.isRequired,
  }),
};

export default ScreenFactory;
