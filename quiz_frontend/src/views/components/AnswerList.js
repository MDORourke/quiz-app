import React from "react";
import PropTypes from "prop-types";

import {
  List,
  ListItem,
  ListItemText,
  RootRef,
  Divider,
} from "@material-ui/core";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,

  ...(isDragging && {
    background: "rgb(235, 235, 235)",
  }),
});

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.props.items,
    };
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.props.onAnswerChange(items);

    this.setState({
      items,
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={(result) => this.onDragEnd(result)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <RootRef rootRef={provided.innerRef}>
              <List>
                {this.state.items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div>
                          {index > 0 && <Divider />}
                          <ListItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            alignItems="flex-start"
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <ListItemText primary={item} />
                          </ListItem>
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const { string, shape, arrayOf, func } = PropTypes;

AnswerList.propTypes = {
  props: shape({
    items: arrayOf(string).isRequired,
  }),
  onAnswerChange: func.isRequired,
};

export default AnswerList;
