import React from "react";
import PropTypes from "prop-types";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";

const Faves = ({ favesData }) => (
  <View>
    <SectionList
      sections={favesData}
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
