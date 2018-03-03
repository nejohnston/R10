import React, { Component } from "react";
import PropTypes from "prop-types";

import EventList from "../../components/EventList/EventList";
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

  _filteredFaves = () => {
    const faves = this.props.faves;
    const sessions = this.props.sessionData;
  };

  render() {
    return <EventList faves={this.props.faves} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  faves: state.faves.faves,
  sessionData: state.schedule.sessionData,
  error: state.faves.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  faves: PropTypes.array,
  sessionData: PropTypes.array
};

export default connect(mapStateToProps)(FavesContainer);
