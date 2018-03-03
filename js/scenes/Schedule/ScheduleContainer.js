import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchScheduleInfo } from "../../redux/modules/schedule";

import EventList from "../../components/EventList/EventList";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchScheduleInfo());
  }

  render() {
    return <EventList sessionData={this.props.sessionData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessionData: state.schedule.sessionData,
  error: state.schedule.error
});

ScheduleContainer.propTypes = {
  dispatch: PropTypes.func,
  sessionData: PropTypes.array
};

export default connect(mapStateToProps)(ScheduleContainer);
