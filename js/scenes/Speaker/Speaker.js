import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View, TouchableHighlight, Image } from "react-native";

import { styles } from "./styles";
import { popSpeaker } from "../../config/navHelpers";
import { closeIcon } from "../../config/iconHelpers";

const Speaker = ({ speakerData }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View>
        <TouchableHighlight onPress={() => popSpeaker()}>
          <Icon active name={closeIcon} size={40} color="white" />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.headerText}>About this Speaker</Text>
      </View>
    </View>
    <View style={styles.body}>
      <Image style={styles.speakerAvatar} source={{ uri: speakerData.image }} />
      <Text>{speakerData.name}</Text>
      <Text style={styles.bodyText}>{speakerData.bio}</Text>
    </View>
  </View>
);

Speaker.propTypes = {
  speakerData: PropTypes.object
};

export default Speaker;
