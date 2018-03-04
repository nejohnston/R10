import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import EventList from "../../components/EventList/EventList";
import { fetchSpeaker } from "../../redux/modules/speaker";
import { connect } from "react-redux";
import { getRealmFaves } from "../../redux/modules/faves";
import { formatSessionData, formatAndFilterFaves } from "../../config/helpers";

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
    this.props.dispatch(getRealmFaves(this.props.data));
  }

  render() {
    console.log(this.props.faves);
    const { faves, data } = this.props;
    const faveSessions = formatAndFilterFaves(faves, data);
    console.log(faveSessions);

    return <EventList faves={faves} data={faveSessions} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  faves: state.faves.faves,
  data: state.schedule.data,
  error: state.faves.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  faves: PropTypes.array,
  data: PropTypes.array
};

export default connect(mapStateToProps)(FavesContainer);
