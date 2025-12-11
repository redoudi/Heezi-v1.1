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
      <View style={styles.levelHeader}>
        <Text style={[styles.levelText, styles.bold]}>{"Niveau : "}</Text>
        <Text style={styles.levelText}>débutant</Text>
      </View>
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
    alignItems: !isMobile ? "flex-start" : "center",
    gap: !isMobile ? 0 : 16,
  },
  levelText: {
    fontSize: 18,

    color: "#292929",
    marginBottom: !isMobile ? 8 : 0,
    marginRight: !isMobile ? 0 : 12,
  },
  bold: {
    fontWeight: "bold",
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
  levelHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
