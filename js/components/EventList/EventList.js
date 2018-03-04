import React from "react";
import PropTypes from "prop-types";

import { goToSession } from "../../config/navHelpers";

import Icon from "react-native-vector-icons";

import { faveIcon } from "../../config/iconHelpers";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import { formatUnixDate } from "../../config/helpers";

const EventList = ({ data, faves }) => (
  <View>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => goToSession(item) && console.log(faves)}
        >
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
            <View>
              {faves.includes(data.session_id) && (
                <Icon active name={faveIcon} size={30} color={"red"} />
              )}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{formatUnixDate(section.title)}</Text>
      )}
      keyExtractor={(item, index) => index}
      stickySectionHeadersEnabled={false}
    />
  </View>
);

EventList.propTypes = {
  data: PropTypes.array,
  faves: PropTypes.array
};

export default EventList;
