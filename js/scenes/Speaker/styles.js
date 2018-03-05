import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  header: {
    paddingTop: 30,
    flex: 0.2,
    flexDirection: "row"
  },
  headerText: { color: colors.white },
  body: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: 20
  },
  bodyText: {
    color: colors.black,
    fontFamily: typography.fontMain
  }
});
