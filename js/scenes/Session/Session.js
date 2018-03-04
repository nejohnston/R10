import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Button, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { goToSpeaker } from "../../config/navHelpers";
import speaker from "../../redux/modules/speaker";
import { faveIcon } from "../../config/iconHelpers";
import { colors } from "../../config/styles";
import { createFave, deleteFave } from "../../config/model";

const Session = ({ data, speakerData }) => (
  <View>
    <Icon
      active
      onPress={() => createFave(data.session_id)}
      name={faveIcon}
      size={30}
      color={"red"}
    />
    {speakerData && (
      <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
        <View>
          <Text>Presented By:</Text>
          <View>
            <Image
              source={{ uri: speakerData.image }}
              style={{ height: 70, width: 70, borderRadius: 35 }}
            />
          </View>
          <View>
            <Text>{speakerData.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )}

    <Button title="Remove Fave" onPress={() => deleteFave(data.session_id)} />
  </View>
);

Session.propTypes = {
  data: PropTypes.object,
  speakerData: PropTypes.object
};

export default Session;
