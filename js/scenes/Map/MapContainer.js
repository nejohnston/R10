import React, { Component } from "react";
import PropTypes from "prop-types";
import Map from "./Map";

export default class MapContainer extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <Map />;
  }
}
