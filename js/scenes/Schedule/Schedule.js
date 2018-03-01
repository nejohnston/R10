import React from "react";
import PropTypes from "prop-types";

import Router from "../../navigation/routes";
import { NavigationActions } from "@expo/ex-navigation";
import Store from "../../redux/store";

import { goToSession } from "../../config/navigationHelpers";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";

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
      renderSectionHeader={({ section }) => (
        <Text>{moment.unix(section.title).format("LT")}</Text>
      )}
      keyExtractor={(item, index) => index}
      stickySectionHeadersEnabled={false}
    />
  </View>
);

export default Schedule;
