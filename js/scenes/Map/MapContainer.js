import React, { Component } from "react";
import PropTypes from "prop-types";
import Map from "./Map";
import { Text } from "react-native";
import HeaderGradient from "../../components/HeaderGradient";
import {
  colors,
  typography
} from "../../config/styles";

class MapContainer extends Component {
  static route = {
    navigationBar: {
      title: "Map",
      tintColor: colors.white,
      renderBackground: HeaderGradient,
      titleStyle: {
        fontFamily: typography.fontMain
      }
    }
  };

  render() {
    return <Map />;
  }
}

export default MapContainer;
