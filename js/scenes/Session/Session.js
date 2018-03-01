import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";

import styles from "./styles";
import { goToSpeaker } from "../../config/navigationHelpers";

const Session = ({ data }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker("hi")}>
      <Text>{data.description}</Text>
    </TouchableHighlight>
  </View>
);

export default Session;
