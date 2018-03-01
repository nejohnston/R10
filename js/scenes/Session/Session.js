import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { goToSpeaker } from "../../config/navHelpers";
import speaker from "../../redux/modules/speaker";
import { heartIcon } from "../../config/platformHelpers";
import { colors } from "../../config/styles";

const Session = ({ data, speakerData }) => (
  <View>
    <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
      <Text>{data.description}</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Icon name={heartIcon} size={30} color={"red"} />
    </TouchableHighlight>
  </View>
);

Session.propTypes = {
  data: PropTypes.object
};

export default Session;
