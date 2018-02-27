import React, { Component } from "react";
import PropTypes from "prop-types";

import About from "./About";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // fetch loading true, data empty array component did mount setstate to loading false
  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);

    return <About data={data} />;
  }
}

export default AboutContainer;
