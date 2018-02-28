import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";

import styles from "./styles";

const Schedule = ({ sessions }) => (
  <View>
    {sessions.map((data, i) => (
      <View key={i}>
        <Text style={styles.descriptionTitle}>{data.title}</Text>
        <Text style={styles.bodyText}>{data.description}</Text>
      </View>
    ))}
  </View>
);

export default Schedule;
