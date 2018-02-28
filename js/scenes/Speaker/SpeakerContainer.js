import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

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
    return <Text>sdfasdf</Text>;
  }
}

export default SpeakerContainer;
