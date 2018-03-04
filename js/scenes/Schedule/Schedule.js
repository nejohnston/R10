import React from "react";
import PropTypes from "prop-types";

import { View } from "react-native";
import styles from "./styles";
import EventList from "../../components/EventList/EventList";

const Schedule = ({ data, faves }) => (
  <View>
    <EventList data={data} faves={faves} />
  </View>
);

Schedule.propTypes = {
  data: PropTypes.array,
  faves: PropTypes.array
};

export default Schedule;
