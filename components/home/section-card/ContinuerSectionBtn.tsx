import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomTouchableOpacity from "./CustomTouchableOpacity";

export default function ContinuerSectionBtn({
  continuerRoute,
}: {
  continuerRoute: string;
}) {
  const { toolConstants } = usePracticeToolConstants();
  const disabled = !!!continuerRoute;

  return (
    <View style={styles.mainContainer}>
      <CustomTouchableOpacity
        style={[
          styles.button,
          { backgroundColor: disabled ? "white" : toolConstants.color },
        ]}
        onPress={() => router.push(continuerRoute)}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{"Continuer"}</Text>
        <Image
          source={require("@/assets/images/7b4n53nk_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </CustomTouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 11,
  },
  image: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
