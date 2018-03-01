import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";

import styles from "./styles";
import { goToSpeaker } from "../../config/navigationHelpers";

const Session = sessionData => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker(sessionData)}>
      <Text>{sessionData.description}</Text>
    </TouchableHighlight>
  </View>
);

export default Session;
