import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchScheduleInfo } from "../../redux/modules/schedule";

import Schedule from "./Schedule";
import { formatSessionData } from "../../config/helpers";
import { getRealmFaves } from "../../redux/modules/faves";

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
    this.props.dispatch(getRealmFaves());
  }

  render() {
    const formattedSchedule = formatSessionData(this.props.data);
    console.log(formattedSchedule);
    return <Schedule data={formattedSchedule} faves={this.props.faves} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  data: state.schedule.data,
  faves: state.faves.faves,
  error: state.schedule.error
});

ScheduleContainer.propTypes = {
  dispatch: PropTypes.func,
  sessionData: PropTypes.array,
  faves: PropTypes.array,
  data: PropTypes.array
};

export default connect(mapStateToProps)(ScheduleContainer);
