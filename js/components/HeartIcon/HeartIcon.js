import React from "react";
import Icon from "react-native-vector-icons";
import { faveIcon } from "../config/iconHelpers";
import { colors } from "../config/styles";

const FaveIcon = () => {
  <Icon active name={faveIcon} size={30} color={colors.red} />;
};

export default FaveIcon;
