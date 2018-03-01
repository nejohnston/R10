import { Platform } from "react-native";

export const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

export const closeIcon = Platform.select({
  ios: "ios-close",
  android: "md-close"
});
