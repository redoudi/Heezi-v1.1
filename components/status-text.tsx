import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { spacing } from "@/styles/designSystem";
import { StyleSheet, Text, View } from "react-native";

export default function StatusText() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.statusButton,
        { backgroundColor: toolConstants.secondaryColor },
      ]}
    >
      <Text style={[{ fontSize: 10, lineHeight: 24 }, styles.statusText]}>
        En cours
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  statusButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs / 2,
  },
  statusText: {
    color: "#0A2924",
    lineHeight: 10,
  },
});
