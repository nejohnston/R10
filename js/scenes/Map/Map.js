import React from "react";
import MapView, {
  Marker
} from "react-native-maps";
import { StyleSheet } from "react-native";

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

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={markerLocation}
    >
      <Marker
        coordinate={markerLocation}
        image={require("../../assets/images/map_pin.png")}
      />
    </MapView>
  );
};

export default Map;
