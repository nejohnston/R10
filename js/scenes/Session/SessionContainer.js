import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      // title: "Session"
      title(sessionData) {
        return { sessionData };
      }
    }
  };

  render() {
    return <Session />;
  }
}

export default SessionContainer;
