import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { goToSpeaker } from "../../config/navigationHelpers";
import speaker from "../../redux/modules/speaker";
import { heartIcon } from "../../config/platformHelper";

const Session = ({ data, speakerData }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
      <Text>{data.description}</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Icon name={heartIcon} size={30} />
    </TouchableHighlight>
  </View>
);

Session.propTypes = {
  data: PropTypes.object
};

export default Session;
