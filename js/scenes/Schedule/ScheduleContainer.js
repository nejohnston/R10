import React, { Component } from "react";
import PropTypes from "prop-types";

import Schedule from "./Schedule";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  render() {
    return <Schedule />;
  }
}

export default ScheduleContainer;
