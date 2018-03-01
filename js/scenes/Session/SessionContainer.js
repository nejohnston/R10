import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSpeaker());
    console.log(this.props.speakerData);
  }

  render() {
    return (
      <Session
        speakerData={this.props.speakerData}
        sessionData={this.props.route.params.sessionData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

export default connect(mapStateToProps)(SessionContainer);
