import useCompletedLevelsStore from "@/store/useCompletedLevels";
import { isMobile } from "@/utils/isMobile";
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
    <View style={styles.mainContainer}>
      <Text style={styles.levelText}>{"Niveau : débutant"}</Text>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressBarFill, { width: `${totalProgress}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: !isMobile ? 8 : 0,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: !isMobile ? 32 : 16,
    paddingHorizontal: 16,
    flexDirection: !isMobile ? "column" : "row",
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#989898",
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#33C6FD",
    width: "0%",
  },
});
