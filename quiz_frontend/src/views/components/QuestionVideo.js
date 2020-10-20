import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const QuestionVideo = ({ props }) => <YouTube videoId={props.videoId} />;

const { string, shape } = PropTypes;

QuestionVideo.propTypes = {
  props: shape({
    videoId: string.isRequired,
  }),
};

export default QuestionVideo;
