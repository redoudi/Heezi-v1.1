import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, View } from "react-native";

export default function JouerButton({ image }) {
  const { toolConstants } = usePracticeToolConstants();

  return (
    <View style={styles.mainContainer}>
      <Image source={image} resizeMode={"contain"} />
      <View
        style={[
          styles.playButtonTextContainer,
          { backgroundColor: toolConstants.color },
        ]}
      >
        <Text style={styles.playButtonText}>{"Jouer"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  playButtonTextContainer: {
    backgroundColor: "red",
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  playButtonText: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
  },
});
