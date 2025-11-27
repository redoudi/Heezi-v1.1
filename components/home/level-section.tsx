import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import {
  palette,
  radius,
  spacing,
  surfaces,
} from "@/styles/designSystem";
import { typography, withTextStyle } from "@/styles/typography";

interface LevelSectionProps {
  level: string;
  score: string;
  coinIconUri: string;
  badgeIconUri: string;
  onScorePress: () => void;
}

export function LevelSection({
  level,
  score,
  coinIconUri,
  badgeIconUri,
}: LevelSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.levelHeader}>
        <ThemedText style={styles.levelText}>{level}</ThemedText>
        <View style={styles.progressBar} />
      </View>
      <View style={styles.scoreRow}>
        {/* <TouchableOpacity
          style={styles.scoreButton}
          disabled
          onPress={() => {}}
        >
          <Image
            source={{ uri: coinIconUri }}
            resizeMode="stretch"
            style={styles.coinIcon}
          />
          <ThemedText style={styles.scoreText}>{score}</ThemedText>
        </TouchableOpacity>
        <Image
          source={{ uri: badgeIconUri }}
          resizeMode="stretch"
          style={styles.badgeIcon}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    paddingTop: spacing.xl,
    marginBottom: spacing.md,
  },
  levelHeader: {
    ...surfaces.card,
    paddingVertical: spacing.md,
    marginBottom: spacing.xs,
  },
  levelText: withTextStyle(typography.headline, {
    color: palette.primaryText,
    marginBottom: spacing.xs,
    marginLeft: spacing.md,
  }),
  progressBar: {
    height: 8,
    backgroundColor: palette.divider,
    marginHorizontal: spacing.md,
  },
  scoreRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  scoreButton: {
    width: 98,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.surface,
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
    marginRight: spacing.xs,
  },
  coinIcon: {
    borderRadius: radius.md,
    width: 32,
    height: 32,
    marginLeft: spacing.xs,
    marginRight: spacing.xxs,
  },
  scoreText: withTextStyle(typography.headline, {
    color: palette.accentOrange,
    marginRight: spacing.sm,
  }),
  badgeIcon: {
    width: 71,
    height: 48,
  },
});
