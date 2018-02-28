import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SectionList
} from "react-native";
import { formatSessionData } from "../../../helpers";
import styles from "./styles";

const sectionCard = () => {
  <View>
    <Text>{item.title}</Text>
    <Text>{item.location}</Text>
  </View>;
};

const Schedule = ({ sessions }) => (
  <View>
    <SectionList
      sections={sessions}
      renderItem={({ item }) => sectionCard}
      renderSectionHeader={({ section }) => sectionCard}
      keyExtractor={(item, index) => index}
    />
  </View>
);

export default Schedule;
