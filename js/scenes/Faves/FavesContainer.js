import React, { Component } from "react";
import PropTypes from "prop-types";

import Faves from "./Faves";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSpeaker());
  }

  render() {
    return (
      <Faves
      // data={this.props.route.params.data}
      // speakerData={this.props.speakerData}
      />
    );
  }
}

// const mapStateToProps = state => ({
//   isLoading: state.faves.isLoading,
//   speakerData: state.faves.speakerData,
//   error: state.faves.error
// });

// FavesContainer.propTypes = {
//   dispatch: PropTypes.func,
//   speakerData: PropTypes.object,
//   route: PropTypes.object
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSpeaker(speakerId) {
//       dispatch(fetchSpeaker(speakerId));
//     }
//   };
// };

// export default connect(mapStateToProps)(FavesContainer);
export default FavesContainer;
