import React from "react";
import PropTypes from "prop-types";
import MapView, {
  Marker,
  Callout
} from "react-native-maps";
import { StyleSheet, Text } from "react-native";

import {
  locationCoordinates,
  region
} from "../../config/locationCoordinates";

// import { MapPin } from "../../assets/images/map_pin.png";

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

const markerLocation = {
  latitude: 49.263348,
  longitude: -123.138128,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

// const markers: [
//   {
//     coordinate: {
//       latitude: ,
//       longitude: ,
//     },
//   },
//   {location: 'Main Hall',
//     coordinate: {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//     },
//   },
//   {
//     coordinate: {
//       latitude: LATITUDE + SPACE,
//       longitude: LONGITUDE - SPACE,
//     },
//   },
// ],

const Map = ({ data }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={markerLocation}
    >
      <Marker
        coordinate={markerLocation}
        image={require("../../assets/images/map_pin.png")}
        onPress={e => console.log(e.nativeEvent)}
      />
      <Callout tooltip={true}>
        <Text>hey</Text>
      </Callout>
    </MapView>
  );
};

Map.propTypes = {
  data: PropTypes.array
};

export default Map;
