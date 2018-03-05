import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey
  },
  sessionTime: {
    marginLeft: 14,
    fontFamily: typography.fontMain,
    marginVertical: 3
  },
  sessionCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 14,
    marginBottom: 1
  },
  sessionTitle: {
    color: colors.black,
    fontSize: 17,
    fontFamily: typography.fontMain,
    marginBottom: 6
  },
  sessionLocation: {
    color: colors.mediumGrey,
    fontFamily: typography.lightMain,
    fontSize: 14
  },
  sessionHeart: {
    justifyContent: "flex-end"
  }
});
