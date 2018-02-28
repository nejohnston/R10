import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  render() {
    return <Session />;
  }
}

export default Session;
