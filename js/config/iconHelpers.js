import { Platform } from "react-native";

export const addIcon = Platform.select({
  ios: "ios-add",
  android: "md-add"
});

export const subtractIcon = Platform.select({
  ios: "ios-remove",
  android: "md-remove"
});

export const heartIcon = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

export const closeIcon = Platform.select({
  ios: "ios-close",
  android: "md-close"
});

export const scheduleIcon = Platform.select({
  ios: "ios-calendar-outline",
  android: "md-calendar"
});

export const aboutIcon = Platform.select({
  ios: "ios-at-outline",
  android: "md-at"
});

export const mapIcon = Platform.select({
  ios: "ios-map-outline",
  android: "md-map"
});
