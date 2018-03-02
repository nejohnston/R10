import React, { Component } from "react";
import PropTypes from "prop-types";

import Faves from "./Faves";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";
import { getRealmFaves } from "../../redux/modules/faves";

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
    this.props.dispatch(getRealmFaves());
    console.log(this.props.dispatch(getRealmFaves()));
  }

  render() {
    return (
      <Faves
        // data={this.props.route.params.data}
        faves={this.props.favesData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  favesData: state.faves.favesData,
  error: state.faves.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  favesData: PropTypes.array
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSpeaker(speakerId) {
//       dispatch(fetchSpeaker(speakerId));
//     }
//   };
// };

export default connect(mapStateToProps)(FavesContainer);
