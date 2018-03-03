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
  }

  render() {
    return <Faves data={this.props.data} favesData={this.props.favesData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  favesData: state.faves.favesData,
  data: state.schedule.data,
  error: state.faves.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  favesData: PropTypes.array
};

export default connect(mapStateToProps)(FavesContainer);
