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
    <View style={styles.mainContainer}>
      {/* <Image
        source={require("@/assets/images/ldtg9pud_expires_30_days.png")}
        resizeMode="stretch"
        style={styles.thumbnail}
      /> */}
      <View style={[styles.content, { backgroundColor: toolConstants.color }]}>
        <View style={styles.header}>
          <ThemedText style={styles.progressText}>
            1/3 sections débloquées
          </ThemedText>
          <StatusText />
        </View>
        <ThemedText style={styles.title}>{toolConstants.title}</ThemedText>
        <ThemedText style={styles.description}>
          {toolConstants.description}
        </ThemedText>
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
    paddingVertical: spacing.md,
  }),
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
    marginHorizontal: spacing.md,
  },
  progressText: withTextStyle(typography.caption, {
    color: palette.tertiaryText,
    flex: 1,
  }),
  statusButton: {
    width: 68,
    alignItems: "center",
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
  },
  statusText: withTextStyle(typography.body, {
    color: palette.secondaryText,
  }),
  title: withTextStyle(typography.title, {
    color: palette.secondaryText,
    marginBottom: spacing.xs,
    marginLeft: spacing.md,
  }),
  description: withTextStyle(typography.body, {
    color: palette.secondaryText,
    marginLeft: spacing.md,
  }),
});
