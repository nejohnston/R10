import React, { Component } from "react";
import PropTypes from "prop-types";

import About from "./About";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // fetch loading true, data empty array component did mount setstate to loading false

  render() {
    return <About />;
  }
}

export default AboutContainer;
