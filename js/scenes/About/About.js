import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import styles from "./styles";

const About = ({ data }) => (
  <View>
    <View style={styles.headerView}>
      <Image
        style={styles.headerImage}
        source={require("../../assets/images/r10_logo.png")}
      />
    </View>
    {data.map(data => <View />)}
    <Text>I am on the about scene</Text>
  </View>
);

export default About;
