import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import EventList from "../../components/EventList/EventList";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";
import { getRealmFaves } from "../../redux/modules/faves";
import { filteredFaves } from "../../config/helpers";

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
    console.log(this.props.sessionData);
    console.log(this.props.faves);
    const { faves, sessionData } = this.props;
    const faveSessions = filteredFaves(faves, sessionData);

    return <EventList faves={faves} faveSessions={faveSessions} />;
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
