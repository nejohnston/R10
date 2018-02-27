import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerView: {
    height: height / 4,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
