import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../config/styles";

import HeartIcon from "../../components/HeartIcon/";
import { styles } from "./styles";
import {
  goToSpeaker,
  goToMap
} from "../../config/navHelpers";
import { favedOrNot } from "../../redux/modules/faves";

import { connect } from "react-redux";
import { formatUnixDate } from "../../config/helpers";
import SessionFaveButton from "../../components/SessionFaveButton/SessionFaveButton";

const Session = ({
  data,
  speakerData,
  faves,
  favedOrNot
}) => (
  <View style={styles.container}>
    <View style={styles.locationAndIcon}>
      <View>
        <Text style={styles.locationText}>
          {data.location}
        </Text>
        <TouchableOpacity
          onPress={() => goToMap(data)}
        >
          <Text>Go to map</Text>
        </TouchableOpacity>
      </View>
      <View>
        {faves.includes(data.session_id) && (
          <HeartIcon />
        )}
      </View>
    </View>
    <View>
      <Text style={styles.title}>{data.title}</Text>
    </View>
    <View>
      <Text style={styles.startTime}>
        {formatUnixDate(data.start_time)}
      </Text>
    </View>
    <View>
      <Text style={styles.description}>
        {data.description}
      </Text>
    </View>
    {speakerData && (
      <Text style={styles.presentedBy}>
        Presented By:
      </Text>
    )}
    {speakerData && (
      <TouchableHighlight
        onPress={() => goToSpeaker(speakerData)}
      >
        <View style={styles.speakerWrapper}>
          <Image
            source={{ uri: speakerData.image }}
            style={{
              height: 70,
              width: 70,
              borderRadius: 35
            }}
          />
          <View style={styles.speakerName}>
            <Text style={styles.description}>
              {speakerData.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )}
    <View style={styles.removeButtonWrapper}>
      <LinearGradient
        colors={[colors.blue, colors.purple]}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
      >
        <Button
          onPress={() =>
            favedOrNot(
              data.session_id,
              !faves.includes(data.session_id)
            )
          }
          title={
            faves.includes(data.session_id)
              ? "Remove Fave"
              : "Add As Fave"
          }
          color={colors.white}
        />
      </LinearGradient>
    </View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
