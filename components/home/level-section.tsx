import { palette, spacing, surfaces } from "@/styles/designSystem";
import { StyleSheet, Text, View } from "react-native";

interface LevelSectionProps {
  level: string;
  score: string;
  coinIconUri: string;
  badgeIconUri: string;
  onScorePress: () => void;
}

export function LevelSection({ level }: LevelSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.levelHeader}>
        <Text style={styles.levelText}>{"Niveau : débutant"}</Text>
        <View style={styles.progressBar} />
      </View>
      <View style={styles.scoreRow}></View>
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
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: palette.primaryText,
    marginBottom: spacing.xs,
    marginLeft: spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: palette.divider,
    marginHorizontal: spacing.md,
  },
  scoreRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
});
