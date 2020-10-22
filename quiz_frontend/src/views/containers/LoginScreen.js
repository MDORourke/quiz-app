import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Typography,
  TextField,
  Button,
  Grid,
  withStyles,
} from "@material-ui/core";

import { socketOperations } from "../../state/ducks/socket";

const styles = () => ({
  centered: {
    textAlign: "center",
    alignItems: "center",
  },
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleLogin() {
    const { socket, sendMessage } = this.props;
    const { name } = this.state;

    sendMessage(socket, "login", name);
  }

  handleTextChange(name) {
    this.setState({
      name: name,
    });
  }

  render() {
    const { classes } = this.props;
    const { name } = this.state;

    return (
      <Grid
        container
        className={classes.centered}
        spacing={3}
        direction="column"
      >
        <Grid item xs={6}>
          <Typography variant="h2">Please enter your name!</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="filled"
            defaultValue={name}
            onChange={(event) => this.handleTextChange(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={() => this.handleLogin()}>LOGIN</Button>
        </Grid>
      </Grid>
    );
  }
}

const { object, func } = PropTypes;

LoginScreen.propTypes = {
  socket: object.isRequired,
  classes: object.isRequired,
  sendMessage: func.isRequired,
};

const mapStateToProps = (state) => {
  const { socketState } = state;

  return {
    socket: socketState.socket,
  };
};

const mapDispatchToProps = {
  sendMessage: socketOperations.sendMessage,
};

const StyledScreen = withStyles(styles)(LoginScreen);

export default connect(mapStateToProps, mapDispatchToProps)(StyledScreen);
