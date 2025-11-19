import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ContinuerSectionBtn({
  onPress = () => {},
  disabled = false,
}: {
  onPress?: () => void;
  disabled?: boolean;
}) {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: disabled ? "white" : toolConstants.color },
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{"Continuer"}</Text>
        <Image
          source={require("@/assets/images/7b4n53nk_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { padding: 8, backgroundColor: "#EFEFEF" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
  image: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
