import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View } from "react-native";

const About = ({ data }) => (
  <View>
      <Image
    {data.map(data => <Text key={item.id} item={item} />)}
    <Text>I am on the about scene</Text>
  </View>
);

export default About;
