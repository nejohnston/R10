import React from "react";
import PropTypes from "prop-types";

import EventList from "../../components/EventList/EventList";

const Schedule = ({ data, faves }) => <EventList data={data} faves={faves} />;

Schedule.propTypes = {
  data: PropTypes.array,
  faves: PropTypes.array
};

export default Schedule;
