import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerView: {
    height: height / 5,
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  openingTitle: {
    fontSize: 20,
    marginBottom: 20
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 3,
    marginBottom: 20
  },
  descriptionTitle: {
    color: "#C8A2C8",
    marginBottom: 20
  }
});

export default styles;
