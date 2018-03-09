import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View,
  ActivityIndicator
} from "react-native";

import About from "./About";
import styles from "./styles";
import { fetchAboutInfo } from "../../redux/modules/about";
import HeaderGradient from "../../components/HeaderGradient";
import {
  colors,
  typography
} from "../../config/styles";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }
  static route = {
    navigationBar: {
      title: "About",
      renderBackground: HeaderGradient,
      tintColor: colors.white,
      titleStyle: {
        fontFamily: typography.fontMain
      }
    }
  };
  componentDidMount() {
    this.props.dispatch(fetchAboutInfo());
  }

  render() {
    return this.props.isLoading ? (
      <View>
        <ActivityIndicator
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    ) : (
      <About data={this.props.aboutData} />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  aboutData: state.about.aboutData,
  error: state.about.error
});

AboutContainer.propTypes = {
  aboutData: PropTypes.array,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(
  AboutContainer
);
