import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey
  },
  sessionCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10
  },
  sessionTitle: { color: colors.mediumGrey, fontSize: 20 },
  sessionLocation: { color: colors.lightGrey }
});
