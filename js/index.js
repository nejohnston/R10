/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Router from "./navigation/routes";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import { Provider } from "react-redux";

import Store from "./redux/store";

export default class App extends Component {
  render() {
    const navigationContext = new NavigationContext(
      {
        router: Router,
        store: Store
      }
    );
    return (
      <Provider store={Store}>
        <NavigationProvider
          context={navigationContext}
        >
          <StackNavigation
            navigatorUID="root"
            initialRoute={Router.getRoute(
              "layout"
            )}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
