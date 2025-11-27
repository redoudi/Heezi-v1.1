import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { palette, radius, spacing } from "@/styles/designSystem";
import { StyleSheet, Text, View } from "react-native";
import StatusText from "../status-text";

export function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[styles.mainContent, { backgroundColor: toolConstants.color }]}
    >
      <View>
        <Text style={styles.title}>{toolConstants.title}</Text>
        <Text style={styles.description}>{toolConstants.description}</Text>
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
