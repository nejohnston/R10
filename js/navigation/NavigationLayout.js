import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

// import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";

class NavigationLayout extends Component {
  render() {
    return (
      // Put your tab bar / tab items / stack navs here~~~~~~
      <TabNavigation id="main" navigatorUID="main" initialTab="about">
        <TabItem
          id="about"
          title="About"
          renderIcon={isSelected => (
            <Icon name="ios-calendar" size={30} color="#4F8EF7" />
          )}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
        <TabItem id="schedule" title="Schedule">
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
