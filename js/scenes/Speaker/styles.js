import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  header: {
    paddingTop: 15,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center"
  },
  icon: {
    justifyContent: "flex-start"
  },
  headerText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    fontFamily: typography.fontMain
  },
  headerAbout: {
    alignSelf: "center"
  },
  body: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 25,
    padding: 10
  },
  bodyText: {
    color: colors.black,
    fontFamily: typography.fontLight,
    fontSize: 18
  },
  speakerAvatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 15
  },
  speakerName: {
    fontSize: 20,
    fontFamily: typography.fontMain,
    marginBottom: 15,
    textAlign: "center"
  },
  removeButtonWrapper: {
    marginTop: 10,
    alignSelf: "center"
  }
});
