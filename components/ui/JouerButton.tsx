import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, View } from "react-native";

export default function JouerButton({ image }) {
  const { toolConstants } = usePracticeToolConstants();

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: toolConstants.color }]}
    >
      <View style={styles.playButtonTextContainer}>
        <Text style={styles.playButtonText}>{"Jouer"}</Text>
      </View>
      <Image source={image} resizeMode={"contain"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    marginRight: 8,
    marginBottom: 56,
  },
  playButtonTextContainer: {
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  playButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
