import React from "react";
import PropTypes from "prop-types";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";

const Faves = ({ faves, data }) => (
  <View>
    <SectionList
      sections={faves}
      renderItem={({ item }) => (
        <TouchableHighlight>
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

Faves.propTypes = {
  //   data: PropTypes.array
};

export default Faves;
