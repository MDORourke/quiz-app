import React from "react";

import { Typography } from "@material-ui/core";

const QuestionTitle = ({ children }) => {
  return (
    <div>
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};

export default QuestionTitle;
