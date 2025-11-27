import { ThemedText } from "@/components/themed-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import {
  palette,
  radius,
  spacing,
  surfaces,
  withViewStyle,
} from "@/styles/designSystem";
import { typography, withTextStyle } from "@/styles/typography";
import { StyleSheet, View } from "react-native";
import StatusText from "../status-text";

export function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View style={[styles.content, { backgroundColor: toolConstants.color }]}>
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
  content: withViewStyle(surfaces.card, {
    flex: 1,
    borderRadius: radius.md,
    padding: spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
  }),

  title: withTextStyle(typography.title, {
    color: palette.secondaryText,
    marginBottom: spacing.xs,
  }),
  description: withTextStyle(typography.body, {
    color: palette.secondaryText,
  }),
});
