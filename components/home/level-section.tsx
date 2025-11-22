import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        <Text style={styles.levelText}>{level}</Text>
        <View style={styles.progressBar} />
      </View>
      <View style={styles.scoreRow}>
        <TouchableOpacity style={styles.scoreButton} onPress={() => {}}>
          <Image
            source={{ uri: coinIconUri }}
            resizeMode="stretch"
            style={styles.coinIcon}
          />
          <Text style={styles.scoreText}>{score}</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: badgeIconUri }}
          resizeMode="stretch"
          style={styles.badgeIcon}
        />
      </View>
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
  },
  levelText: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#989898",
    marginHorizontal: 16,
  },
  scoreRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  scoreButton: {
    width: 98,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 7,
  },
  coinIcon: {
    borderRadius: 8,
    width: 32,
    height: 32,
    marginLeft: 7,
    marginRight: 4,
  },
  scoreText: {
    color: "#F28B0E",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  badgeIcon: {
    width: 71,
    height: 48,
  },
});
