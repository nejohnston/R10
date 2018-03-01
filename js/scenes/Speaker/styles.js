import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../config/styles";

const { mediumGrey, black, white } = colors;
const { height, width } = Dimensions;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  header: {
    paddingTop: 30,
    flex: 0.2,
    flexDirection: "row"
  },
  headerText: { color: "white" },
  body: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 25,
    marginBottom: 20
  }
});

export default styles;
