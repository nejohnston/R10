import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { fetchSpeaker } from "../../redux/modules/speaker";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSpeaker());
  }

  render() {
    return <Session data={this.props.route.params.data} />;
  }
}

export default SessionContainer;
