import { Image, StyleSheet, Text, View } from "react-native";

export default function JouerButton({ image }) {
  return (
    <View style={styles.playButton}>
      <Image source={image} resizeMode={"contain"} />
      <Text style={styles.playButtonText}>{"Jouer"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view3: {
    marginBottom: 16,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  playButtonText: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
  },
});
