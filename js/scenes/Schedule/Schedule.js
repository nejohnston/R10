import React from "react";
import PropTypes from "prop-types";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";

goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { sessionData })
    )
  );
};

const Schedule = ({ data }) => (
  <TouchableHighlight>
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
  </TouchableHighlight>
);

export default Schedule;
