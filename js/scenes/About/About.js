import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  Image,
  ScrollView
} from "react-native";

import styles from "./styles";
import R10_Image from "../../assets/images/r10_logo.png";

import Panel from "../../components/Panel";

const About = ({ data }) => (
  <ScrollView style={styles.container}>
    <View style={styles.headerView}>
      <Image
        style={styles.headerImage}
        source={R10_Image}
      />
    </View>
    <Text style={styles.bodyText}>
      R10 is a conference that focuses on just
      about any topic related to dev.
    </Text>
    <Text style={styles.openingTitle}>
      Date & Venue
    </Text>
    <Text style={styles.bodyText}>
      The R10 conference will take place on the
      North Pole, Mrs. Claus will be hosting.
    </Text>
    <Text style={styles.openingTitle}>
      Code Of Conduct
    </Text>

    {data.map((data, i) => (
      <Panel
        key={i}
        title={data.title}
        description={data.description}
      />
    ))}
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        &copy;Red Academy 2018
      </Text>
    </View>
  </ScrollView>
);

About.propTypes = {
  data: PropTypes.array,
  require: PropTypes.func
};

export default About;
