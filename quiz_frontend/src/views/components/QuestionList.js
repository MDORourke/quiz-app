import React from "react";
import PropTypes from "prop-types";

import { List, ListItem, ListItemText, Divider } from "@material-ui/core";

const QuestionList = ({ props }) => (
  <List>
    {props.items.map((item, index) => {
      return (
        <div key={item}>
          {index > 0 && <Divider />}
          <ListItem alignItems="flex-start">
            <ListItemText primary={item} />
          </ListItem>
        </div>
      );
    })}
  </List>
);

const { string, shape, arrayOf } = PropTypes;

QuestionList.propTypes = {
  props: shape({
    items: arrayOf(string).isRequired,
  }),
};

export default QuestionList;
