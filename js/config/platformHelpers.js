import { Platform } from "react-native";

export const heartIcon = Platform.select({
  ios: "ios-icon",
  android: "md-heart"
});
