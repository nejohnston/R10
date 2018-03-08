import React, { Component } from "react";

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

// Treat the DrawerNavigationLayout route like any other route
// -- you may want to set it as the intiial route for a
// top-level StackNavigation

import { Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";
import {
  colors,
  typography
} from "../config/styles";

import {
  scheduleIcon,
  heartIcon,
  aboutIcon
} from "../config/iconHelpers";

const { black, white, mediumGrey } = colors;
const { fontMain, lightMain } = typography;

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
  render() {
    return (
      // Put your tab bar / tab items / stack navs here~~~~~~
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        initialItem="schedule"
        tabBarColor={colors.black}
      >
        <DrawerNavigationItem
          style={typography.fontMain}
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
        </DrawerNavigationItem>
        <DrawerNavigationItem
          style={typography.fontMain}
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
        </DrawerNavigationItem>
        <DrawerNavigationItem
          style={typography.fontMain}
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
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}

export default Nav;
