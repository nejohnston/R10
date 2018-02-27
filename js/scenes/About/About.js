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
    <Text style={styles.bodyText}>
      R10 is a conference that focuses on just about any topic related to dev.
    </Text>
    <Text style={styles.openingTitle}>Date & Venue</Text>
    <Text style={styles.bodyText}>
      The R10 conference will take place on the North Pole, Mrs. Claus will be
      hosting.
    </Text>
    <Text style={styles.openingTitle}>Date & Venue</Text>

    {data.map(data => (
      <View>
        <Text style={styles.descriptionTitle}>{data.title}</Text>
        <Text style={styles.bodyText}>{data.description}</Text>
      </View>
    ))}
  </View>
);

export default About;
