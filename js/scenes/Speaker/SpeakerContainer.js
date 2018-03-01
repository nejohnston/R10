import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return <Speaker data={this.props.route.params.speakerData} />;
  }
}

export default SpeakerContainer;
