import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";

import styles from "./styles";
// import { goToSpeaker } from "../../config/navigationHelpers";

const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push("root", Router.getRoute("speaker", { speakerData }))
  );
};

const Session = ({ data }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker()}>
      <Text>Session</Text>
    </TouchableHighlight>
  </View>
);

export default Session;
