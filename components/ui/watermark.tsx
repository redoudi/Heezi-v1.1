import { StyleSheet, Text, View } from "react-native";

export default function Watermark({ text }: { text: string }) {
  return (
    <View style={styles.overlay}>
      <Text style={styles.watermark}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1002,
  },
  watermark: {
    transform: [{ rotate: "-45deg" }, { translateY: -20 }],
    fontSize: 40,
    fontWeight: "900",
    borderTopWidth: 10,
    borderBottomWidth: 10,
    backgroundColor: "rgba(234, 234, 234, 0.6)",
    zIndex: 1,
    textAlign: "center",

    padding: 16,
    borderColor: "rgb(255, 91, 91)",
    color: "rgb(255, 91, 91)",
  },
});
