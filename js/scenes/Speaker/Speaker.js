import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";

import styles from "./styles";

const Speaker = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View>
        <Icon active name="ios-close" size={30} color="white" />
      </View>
      <View>
        <Text style={styles.headerText}>About this Speaker</Text>
      </View>
    </View>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{data.bio}</Text>
    </View>
  </View>
);

export default Speaker;
