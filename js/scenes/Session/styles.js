import { StyleSheet, Dimensions } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  locationAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  locationText: {
    color: colors.mediumGrey,
    fontFamily: typography.lightMain,
    fontSize: 16
  },
  startTime: {
    color: colors.red,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: typography.fontMain
  },
  title: {
    fontSize: 24,
    fontFamily: typography.fontMain,
    marginBottom: 10,
    fontWeight: "bold"
  },
  description: {
    fontSize: 18,
    fontFamily: typography.fontLight,
    lineHeight: 25,
    marginBottom: 10
  },
  presentedBy: {
    color: colors.mediumGrey,
    fontSize: 16,
    marginBottom: 10
  },
  avatar: {
    height: 200,
    width: 200
  },
  speakerWrapper: {
    flexDirection: "row",
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  speakerName: {
    alignSelf: "center",
    marginLeft: 10
  }
});
