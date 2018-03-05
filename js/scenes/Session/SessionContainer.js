import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";
import HeaderGradient from "../../components/HeaderGradient";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
      // renderBackground: () => <HeaderGradient />
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSpeaker(this.props.route.params.data));
  }

  render() {
    return (
      <Session
        data={this.props.route.params.data}
        speakerData={this.props.speakerData}
        faves={this.props.faves}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  faves: state.faves.faves,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

SessionContainer.propTypes = {
  dispatch: PropTypes.func,
  speakerData: PropTypes.object,
  faves: PropTypes.array,
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
