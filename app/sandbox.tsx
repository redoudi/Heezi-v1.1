import { StyleSheet, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.triangleContainer}>
      <View style={styles.triangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  triangleContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 200,
    borderTopWidth: 200,
    borderRightColor: "transparent",
    borderTopColor: "#000000",
  },
});
