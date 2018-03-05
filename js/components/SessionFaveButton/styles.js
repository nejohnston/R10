import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";
export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: typography.fontMain,
    textAlign: "center",
    margin: 10,
    color: colors.white
  }
});
