import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Map from "./Map";

import HeaderGradient from "../../components/HeaderGradient";
import {
  colors,
  typography
} from "../../config/styles";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

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
    return <Map data={this.props.data} />;
  }
}

const mapStateToProps = state => ({
  data: state.schedule.data
});

MapContainer.propTypes = {
  data: PropTypes.array
};

export default connect(mapStateToProps)(MapContainer);
