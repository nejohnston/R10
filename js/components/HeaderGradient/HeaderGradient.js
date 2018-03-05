import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../config/styles";

const HeaderGradient = () => (
  <LinearGradient
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.25, y: 1.0 }}
    colors={[colors.Red, colors.Purple]}
    style={{ flex: 1 }}
  />
);

export default HeaderGradient;
