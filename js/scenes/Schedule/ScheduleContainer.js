import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchScheduleInfo } from "../../redux/modules/schedule";

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
    return <Schedule sessionData={this.props.sessionData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessionData: state.schedule.sessionData,
  error: state.schedule.error
});

export default connect(mapStateToProps)(ScheduleContainer);
