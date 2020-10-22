import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core";

import { socketOperations } from "../../state/ducks/socket";

import LoginScreen from "./LoginScreen";
import ScreenFactory from "../components/ScreenFactory";

const SOCKET_HOST = "http://localhost:5000/";

const styles = () => ({
  fullScreen: {
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { connect } = this.props;

    connect(SOCKET_HOST);
  }

  componentWillUnmount() {
    const { socket, disconnect } = this.props;

    if (socket) {
      disconnect(socket);
    }
  }

  render() {
    const { currentScreen, loggedIn, classes } = this.props;

    return (
      <div className={classes.fullScreen}>
        {!loggedIn && <LoginScreen />}
        {loggedIn && <ScreenFactory screen={currentScreen} />}
      </div>
    );
  }
}

const { object, bool, func } = PropTypes;

Game.propTypes = {
  currentScreen: object,
  loggedIn: bool.isRequired,
  socket: object.isRequired,
  connect: func.isRequired,
  disconnect: func.isRequired,
};

const mapStateToProps = (state) => {
  const { gameState, socketState, screenState } = state;

  return {
    currentScreen: screenState.currentScreen,
    loggedIn: gameState.loggedIn,
    socket: socketState.socket,
  };
};

const mapDispatchToProps = {
  connect: socketOperations.connect,
  disconnect: socketOperations.disconnect,
};

const StyledGame = withStyles(styles)(Game);

export default connect(mapStateToProps, mapDispatchToProps)(StyledGame);
