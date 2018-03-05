import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from "react-native";
import HeartIcon from "../../components/HeartIcon/";
import { styles } from "./styles";
import { goToSpeaker } from "../../config/navHelpers";
import { favedOrNot } from "../../redux/modules/faves";
import { colors } from "../../config/styles";

import { connect } from "react-redux";
import { formatUnixDate } from "../../config/helpers";

const Session = ({ data, speakerData, faves, favedOrNot }) => (
  <View>
    <View style={styles.location}>
      <View>
        <Text>{data.location}</Text>
      </View>
      <View>{faves.includes(data.session_id) && <HeartIcon size={16} />}</View>
    </View>
    <View>
      <Text style={styles.sessionTime}>{formatUnixDate(data.start_time)}</Text>
    </View>
    <View>
      <Text>{data.title}</Text>
    </View>
    <View>
      <Text>{data.description}</Text>
    </View>
    {speakerData && (
      <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
        <Text>Presented By:</Text>
        <View>
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
