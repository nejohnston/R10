import React, { Component } from "react";
import PropTypes from "prop-types";
import Map from "./Map";
import { Text } from "react-native";
class MapContainer extends Component {
  static route = {
    navigationBar: { title: "Map" }
  };

  render() {
    return <Map />;
  }
}

export default MapContainer;
