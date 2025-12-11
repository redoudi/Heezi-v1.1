import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, View } from "react-native";

export function HomeHeader({ children }) {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View style={styles.container}>
      <Image source={toolConstants.icon} resizeMode={"contain"} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
