import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import { Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";
import { colors, typography } from "../config/styles";
const { black, white, mediumGrey } = colors;
const { fontMain, lightMain } = typography;

class Nav extends Component {
  render() {
    return (
      // Put your tab bar / tab items / stack navs here~~~~~~
      <TabNavigation id="main" navigatorUID="main" initialTab="schedule">
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-at")}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
  renderTitle(isSelected, title) {
    // selectively set title style (color) to be white if selected, otherwise grey
    return (
      <Text style={{ color: isSelected ? white : mediumGrey }}>{title}</Text>
    );
  }
  renderIcon(isSelected, iconName) {
    return (
      <Icon
        name={iconName}
        style={{ color: isSelected ? white : mediumGrey }}
      />
    );
  }
}

export default Nav;
