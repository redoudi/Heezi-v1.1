import useCompletedLevelsStore from "@/store/useCompletedLevels";
import { StyleSheet, Text, View } from "react-native";

interface LevelSectionProps {
  level: string;
  score: string;
  coinIconUri: string;
  badgeIconUri: string;
  onScorePress: () => void;
}

const toolLevelsCompletedPercentage = (
  toolLevelsCompleted: Record<string, boolean>
) => {
  const levelsCompletedCount =
    Object.values(toolLevelsCompleted).filter(Boolean).length;
  return (
    (levelsCompletedCount / Object.values(toolLevelsCompleted).length) * 100
  );
};

const levelsCompletedPercentage = (
  levelsCompleted: Record<string, boolean>
) => {
  const levelsCompletedCount = toolLevelsCompletedPercentage({
    ...Object.values(levelsCompleted),
  });
};

export function LevelSection({ level }: LevelSectionProps) {
  const { levelsCompleted } = useCompletedLevelsStore();
  const totalProgress = levelsCompletedPercentage(levelsCompleted);

  return (
    <View style={styles.container}>
      <View style={styles.levelHeader}>
        <Text style={styles.levelText}>{"Niveau : débutant"}</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressBarFill, { width: `${totalProgress}%` }]}
          />
        </View>
      </View>
      <View style={styles.scoreRow}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    marginBottom: 16,
  },
  levelHeader: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#989898",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#33C6FD",
    width: "0%",
  },
  scoreRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
});
