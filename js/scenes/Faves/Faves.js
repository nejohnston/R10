import React from "react";
import PropTypes from "prop-types";

import { goToSession } from "../../config/navHelpers";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";

const Schedule = ({ data }) => (
  <View>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => goToSession("schedule", item)}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={(item, index) => index}
      stickySectionHeadersEnabled={false}
    />
  </View>
);

Schedule.propTypes = {
  data: PropTypes.array
};

export default Schedule;
