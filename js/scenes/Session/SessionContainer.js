import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  render() {
    return <Session data={this.props.route.params.data} />;
  }
}

export default SessionContainer;
