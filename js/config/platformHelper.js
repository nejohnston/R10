import { Platform } from "react-native";

export const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});
