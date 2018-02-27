import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerImage: {
    width: width,
    height: height / 4,
    borderWidth: 2
  }
});

export default styles;
