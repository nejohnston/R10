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
import { favedOrNot } from "../../redux/modules/faves";

import { connect } from "react-redux";

const Session = ({ data, speakerData, faves, favedOrNot }) => (
  <View>
    {faves.includes(data.session_id) && (
      <Icon
        active
        onPress={() => createFave(data.session_id)}
        name={faveIcon}
        size={30}
        color={"red"}
      />
    )}
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
    <TouchableHighlight
      title="Remove Fave"
      onPress={() =>
        favedOrNot(data.session_id, !faves.includes(data.session_id))
      }
    >
      <Text>her</Text>
    </TouchableHighlight>
  </View>
);

Session.propTypes = {
  data: PropTypes.object,
  faves: PropTypes.array,
  speakerData: PropTypes.object,
  favedOrNot: PropTypes.func
};

const mapStateToProps = state => ({
  faves: state.faves.faves
});

const mapDispatchToProps = dispatch => ({
  favedOrNot: (session_id, isFaved) => {
    dispatch(favedOrNot(session_id, isFaved));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
