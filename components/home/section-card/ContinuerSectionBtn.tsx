import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ContinuerSectionBtn({
  onPress = () => {},
  disabled = false,
}: {
  onPress?: () => void;
  disabled?: boolean;
}) {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        { backgroundColor: disabled ? "white" : toolConstants.color },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text2}>{"Continuer"}</Text>
      <Image
        source={require("@/assets/images/7b4n53nk_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text2: {
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
