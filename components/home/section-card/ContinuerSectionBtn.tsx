import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography, withTextStyle } from "@/styles/typography";

export default function ContinuerSectionBtn({
  continuerRoute,
}: {
  continuerRoute: string;
}) {
  const { toolConstants } = usePracticeToolConstants();
  const disabled = !!!continuerRoute;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: disabled ? "white" : toolConstants.color },
        ]}
        onPress={() => router.push(continuerRoute)}
        disabled={disabled}
      >
        <ThemedText style={styles.buttonText}>{"Continuer"}</ThemedText>
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
  buttonText: withTextStyle(typography.headline, {
    color: "#0A2924",
    marginRight: 11,
  }),
  image: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
