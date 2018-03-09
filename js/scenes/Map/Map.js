import React from "react";
import PropTypes from "prop-types";
import MapView, {
  Marker,
  Callout
} from "react-native-maps";
import { StyleSheet, Text } from "react-native";

import {
  markers,
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

const Map = ({ data }) => {
  const markerLocation = region;
  // const location = data.location;
  console.log(markers);
  return (
    <MapView
      style={styles.map}
      initialRegion={markerLocation}
    >
      {/* {markers.map(marker => ( */}
      <Marker
        coordinate={markerLocation}
        image={require("../../assets/images/map_pin.png")}
      />
      {/* ))} */}
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
