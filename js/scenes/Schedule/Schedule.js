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
import styles from "./styles";
import moment from "moment";
import { formatSessionData } from "../../../helpers";

const Schedule = ({ data }) => (
  <View>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{moment.unix(section.title).format("LT")}</Text>
      )}
      keyExtractor={(item, index) => index}
      stickySectionHeadersEnabled={false}
    />
  </View>
);

export default Schedule;
