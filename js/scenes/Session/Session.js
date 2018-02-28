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
import { goToSpeaker } from "../../config/navigationHelpers";

const Session = ({ data }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker("root", { data })}>
      <Text>Session</Text>
    </TouchableHighlight>
  </View>
);

export default Session;
