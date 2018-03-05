import React from "react";
import { Text } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../config/styles";
import { styles } from "./styles";

const SessionFaveButton = () => (
  <LinearGradient
    colors={[colors.red, colors.purple]}
    style={styles.linearGradient}
    start={{ x: 0.0, y: 0.25 }}
    end={{ x: 0.5, y: 1.0 }}
    locations={[0, 0.5, 0.6]}
  >
    <Text style={styles.buttonText}>Sign in with Facebook</Text>
  </LinearGradient>
);

export default SessionFaveButton;
