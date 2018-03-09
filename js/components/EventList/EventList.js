import React from "react";
import PropTypes from "prop-types";

import { goToSession } from "../../config/navHelpers";

import HeartIcon from "../HeartIcon/HeartIcon";
import {
  Text,
  View,
  SectionList,
  TouchableHighlight
} from "react-native";
import { styles } from "./styles";
import { formatUnixDate } from "../../config/helpers";

const EventList = ({ data, faves }) => (
  <View style={styles.container}>
    <SectionList
      sections={data}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => goToSession(item)}
        >
          <View style={styles.sessionCard}>
            <View style={styles.sessionMeta}>
              <Text style={styles.sessionTitle}>
                {item.title}
              </Text>
              <Text
                style={styles.sessionLocation}
              >
                {item.location}
              </Text>
            </View>
            <View style={styles.sessionHeart}>
              {faves.includes(
                item.session_id
              ) && <HeartIcon size={16} />}
            </View>
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sessionTime}>
          {formatUnixDate(section.title)}
        </Text>
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
