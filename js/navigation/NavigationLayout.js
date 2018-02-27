import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

class NavigationLayout extends Component {
  render() {
    return (
      // Put your tab bar / tab items / stack navs here~~~~~~
      <TabNavigation id="main" navigatorUID="main" initialTab="home">
        <TabItem
          id="home"
          title="Home"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("./assets/images/home.png")} />
          )}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>

        <TabItem id="posts" title="Posts" selectedStyle={styles.selectedTab}>
          {" "}
          <StackNavigation id="posts" initialRoute={Router.getRoute("posts")} />
        </TabItem>

        <TabItem
          id="profile"
          title="Profile"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => (
            <Image source={require("./assets/images/profile.png")} />
          )}
        >
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute("profile")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
