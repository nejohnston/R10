import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { goToSpeaker } from "../../config/navHelpers";
import { heartIcon } from "../../config/iconHelpers";
import { favedOrNot } from "../../redux/modules/faves";
import { colors } from "../../config/styles";

import { connect } from "react-redux";

const Session = ({ data, speakerData, faves, favedOrNot }) => (
  <View>
    {faves.includes(data.session_id) && (
      <Icon name={heartIcon} size={30} color={colors.red} />
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
