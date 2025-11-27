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
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.title}>{toolConstants.title}</ThemedText>
          <ThemedText style={styles.description}>
            {toolConstants.description}
          </ThemedText>
        </View>
        <StatusText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginBottom: spacing.md,
  },
  thumbnail: {
    width: 173,
    height: 173,
    marginRight: spacing.md,
  },
  content: withViewStyle(surfaces.card, {
    flex: 1,
    borderRadius: radius.md,
    padding: spacing.md,
  }),
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: withTextStyle(typography.caption, {
    color: palette.tertiaryText,
    flex: 1,
  }),
  statusButton: {
    width: 68,
    alignItems: "center",
    borderRadius: radius.md,
  },
  statusText: withTextStyle(typography.body, {
    color: palette.secondaryText,
  }),
  title: withTextStyle(typography.title, {
    color: palette.secondaryText,
    marginBottom: spacing.xs,
  }),
  description: withTextStyle(typography.body, {
    color: palette.secondaryText,
  }),
});
