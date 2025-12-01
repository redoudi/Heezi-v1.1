import { StyleSheet, Text } from "react-native";

export default function Watermark({ text }: { text: string }) {
  return <Text style={styles.watermark}>{text}</Text>;
}

const styles = StyleSheet.create({
  watermark: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -100 },
      { translateY: -20 },
      { rotate: "-45deg" },
    ],
    fontSize: 40,
    fontWeight: "900",
    borderTopWidth: 10,
    borderBottomWidth: 10,
    backgroundColor: "rgba(234, 234, 234, 0.6)",
    zIndex: 1,
    textAlign: "center",
    flex: 1,
    padding: 16,
    borderColor: "rgb(255, 91, 91)",
    color: "rgb(255, 91, 91)",
  },
});
