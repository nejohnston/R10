/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AboutContainer from "./scenes/About/AboutContainer";
import Router from "./navigation/routes";
import { NavigationProvider, StackNavigation } from "@expo/ex-navigation";

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("about")} />
      </NavigationProvider>
    );
  }
}
