import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../redux/store";

import Schedule from "./Schedule";
import { fetchScheduleInfo } from "../../redux/modules/schedule";
import { formatSessionData } from "../../../helpers";

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
    return <Schedule data={this.props.scheduleData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  scheduleData: state.schedule.scheduleData,
  error: state.schedule.error
});

export default connect(mapStateToProps)(ScheduleContainer);
