import { ThemedText } from "@/components/themed-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { spacing } from "@/styles/designSystem";
import { typography } from "@/styles/typography";
import { StyleSheet, View } from "react-native";

export default function StatusText() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.statusButton,
        { backgroundColor: toolConstants.secondaryColor },
      ]}
    >
      <ThemedText style={[typography.body, styles.statusText]}>
        En cours
      </ThemedText>
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
    lineHeight: typography.body.fontSize,
  },
});
