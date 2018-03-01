import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";

import styles from "./styles";
import { goToSpeaker } from "../../config/navigationHelpers";
import speaker from "../../redux/modules/speaker";

const Session = ({ data, speakerData }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
      <Text>{data.description}</Text>
    </TouchableHighlight>
  </View>
);

Session.propTypes = {
  data: PropTypes.object
};

export default Session;
