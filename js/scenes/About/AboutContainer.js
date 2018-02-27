import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, ActivityIndicator } from "react-native";

import About from "./About";
import styles from "./styles";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  // fetch loading true, data empty array component did mount setstate to loading false
  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => console.log(err));
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

export default AboutContainer;
