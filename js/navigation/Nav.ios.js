import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import { Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";
import { colors } from "../config/styles";
import {
  scheduleIcon,
  aboutIcon,
  heartIcon,
  mapIcon
} from "../config/iconHelpers";
const { white, mediumGrey } = colors;

class Nav extends Component {
  renderTitle(isSelected, title) {
    // selectively set title style (color) to be white if selected, otherwise grey
    return (
      <Text
        style={{
          color: isSelected ? white : mediumGrey
        }}
      >
        {title}
      </Text>
    );
  }
  renderIcon(isSelected, iconName) {
    const iconSize = 30;

    return (
      <Icon
        name={iconName}
        size={iconSize}
        style={{
          color: isSelected ? white : mediumGrey
        }}
      />
    );
  }
  static route = {
    navigationBar: {
      visible: false
    }
  };
  render() {
    return (
      // Put your tab bar / tab items / stack navs here~~~~~~
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="schedule"
        tabBarColor={colors.black}
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(
              isSelected,
              scheduleIcon
            )
          }
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute(
              "schedule"
            )}
          />
        </TabItem>
        <TabItem
          id="map"
          title="Map"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, mapIcon)
          }
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute("map")}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, heartIcon)
          }
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute(
              "faves"
            )}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, aboutIcon)
          }
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute(
              "about"
            )}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default Nav;
