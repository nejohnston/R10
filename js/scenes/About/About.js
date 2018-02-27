import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import styles from "./styles";

const About = ({ data }) => (
  <View>
    <View>
      <Image
        source={require("../../assets/images/r10_logo.png")}
        style={styles.headerImage}
      />
    </View>
    {data.map(data => <View />)}
    <Text>I am on the about scene</Text>
  </View>
);

export default About;
