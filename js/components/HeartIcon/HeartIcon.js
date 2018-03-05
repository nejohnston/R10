import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { heartIcon } from "../../config/iconHelpers";
import { colors } from "../../config/styles";

const HeartIcon = () => (
  <Icon active name={heartIcon} size={30} color={colors.red} />
);

export default HeartIcon;
