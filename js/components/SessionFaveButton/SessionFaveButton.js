// import React from "react";
// import { Text, Button, View } from "react-redux";
// import LinearGradient from "react-native-linear-gradient";
// import { colors } from "../../config/styles";
// import { styles } from "./styles";
// import { favedOrNot } from "../../redux/modules/faves";

// const SessionFaveButton = ({
//   faves,
//   data,
//   favedOrNot
// }) => (
//   // <LinearGradient
//   //   colors={[colors.red, colors.purple]}
//   //   style={styles.linearGradient}
//   //   start={{ x: 0.0, y: 0.25 }}
//   //   end={{ x: 0.5, y: 1.0 }}
//   //   locations={[0, 0.5, 0.6]}
//   // >
//   //   <Text style={styles.buttonText}>
//   //     {buttonText}
//   //   </Text>
//   // </LinearGradient>
//   <View style={styles.removeButtonWrapper}>
//     <LinearGradient
//       colors={[colors.blue, colors.purple]}
//       style={styles.linearGradient}
//       start={{ x: 0.0, y: 0.25 }}
//       end={{ x: 0.5, y: 1.0 }}
//       locations={[0, 0.5, 0.6]}
//     >
//       <Button
//         onPress={() =>
//           favedOrNot(
//             data.session_id,
//             !faves.includes(data.session_id)
//           )
//         }
//         title={
//           faves.includes(data.session_id)
//             ? "Remove Fave"
//             : "Add As Fave"
//         }
//       />
//     </LinearGradient>
//   </View>
// );

// export SessionFaveButton
