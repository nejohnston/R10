import React from "react";
import PropTypes from "prop-types";

import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import EventList from "../../components/EventList/EventList";

const Faves = ({ faves, data }) => (
  <View>
    <EventList faves={faves} data={data} />
  </View>
);

Faves.propTypes = {
  data: PropTypes.array,
  faves: PropTypes.array
};

export default Faves;
