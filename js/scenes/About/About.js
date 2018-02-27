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

const About = ({ data }) => (
  <ScrollView style={styles.container}>
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
    <Text style={styles.openingTitle}>Code Of Conduct</Text>

    {data.map((data, i) => (
      <View key={i}>
        <Text style={styles.descriptionTitle}>{data.title}</Text>
        <Text style={styles.bodyText}>{data.description}</Text>
      </View>
    ))}
    <View style={styles.footer}>
      <Text style={styles.footerText}>&copy;Red Academy 2018</Text>
    </View>
  </ScrollView>
);

export default About;
