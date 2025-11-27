import { ThemedText } from "@/components/themed-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { palette, radius, spacing } from "@/styles/designSystem";
import { StyleSheet, View } from "react-native";
import StatusText from "../status-text";

export function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[styles.mainContent, { backgroundColor: toolConstants.color }]}
    >
      <View>
        <ThemedText style={styles.title}>{toolConstants.title}</ThemedText>
        <ThemedText style={styles.description}>
          {toolConstants.description}
        </ThemedText>
      </View>
      <StatusText />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 22,
    color: palette.secondaryText,
  },
  description: { fontSize: 12, color: palette.secondaryText },
});
