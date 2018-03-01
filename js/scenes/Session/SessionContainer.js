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
  }

  render() {
    return (
      <Session
        data={this.props.route.params.data}
        speakerData={this.props.speakerData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

SessionContainer.propTypes = {
  dispatch: PropTypes.func,
  speakerData: PropTypes.array,
  route: PropTypes.object
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSpeaker(speakerId) {
//       dispatch(fetchSpeaker(speakerId));
//     }
//   };
// };

export default connect(mapStateToProps)(SessionContainer);
