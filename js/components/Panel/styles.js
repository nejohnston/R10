import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden"
  },
  titleContainer: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#2a2f43",
    fontWeight: "bold"
  },
  body: {
    padding: 10,
    paddingTop: 0
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 20,
    letterSpacing: 1.5
  },
  descriptionTitle: {
    color: "#C8A2C8",
    marginBottom: 20,
    fontSize: 16
  }
});
