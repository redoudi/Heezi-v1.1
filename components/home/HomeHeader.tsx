import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, View } from "react-native";
import StatusText from "../status-text";

export default function HomeHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View style={styles.container}>
      <Image source={toolConstants.icon} resizeMode={"contain"} />
      <View
        style={[styles.mainContent, { backgroundColor: toolConstants.color }]}
      >
        {children}
        <StatusText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  mainContent: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
