import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  headerView: {
    height: height / 5,
    borderBottomWidth: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  openingTitle: {
    fontSize: 20,
    marginBottom: 20
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
    letterSpacing: 1.5
  },
  descriptionTitle: {
    color: "#C8A2C8",
    marginBottom: 20,
    fontSize: 16
  }
});

export default styles;
