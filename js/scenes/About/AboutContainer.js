import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../redux/store";
import { View, ActivityIndicator } from "react-native";

import About from "./About";
import styles from "./styles";
import { fetchAboutInfo } from "../../redux/modules/about";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }
  static route = {
    navigationBar: {
      title: "About"
    }
  };
  // fetch loading true, data empty array component did mount setstate to loading false
  componentDidMount() {
    this.props.dispatch(fetchAboutInfo);
  }

  render() {
    console.log(this.state.data);

    return this.state.loading ? (
      <View>
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      </View>
    ) : (
      <About data={this.state.data} />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  aboutData: state.about.itemsData,
  error: state.about.error
});

export default connect(mapStateToProps)(AboutContainer);
