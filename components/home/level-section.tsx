import useCompletedLevelsStore from "@/store/useCompletedLevels";
import { StyleSheet, Text, View } from "react-native";

interface LevelSectionProps {
  level: string;
  score: string;
  coinIconUri: string;
  badgeIconUri: string;
  onScorePress: () => void;
}

export function LevelSection({ level }: LevelSectionProps) {
  const { totalProgress } = useCompletedLevelsStore();

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
