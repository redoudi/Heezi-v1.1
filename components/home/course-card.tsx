import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { StyleSheet, Text, View } from "react-native";
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
          <Text style={styles.progressText}>1/3 sections débloquées</Text>
          <StatusText />
        </View>
        <Text style={styles.title}>{toolConstants.title}</Text>
        <Text style={styles.description}>{toolConstants.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  thumbnail: {
    width: 173,
    height: 173,
    marginRight: 16,
  },
  content: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 15,
  },
  progressText: {
    color: "#1C5348",
    fontSize: 14,
    flex: 1,
  },
  statusButton: {
    width: 68,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: "#0A2924",
    fontSize: 16,
  },
  title: {
    color: "#0A2924",
    fontSize: 28,
    marginBottom: 7,
    marginLeft: 15,
  },
  description: {
    color: "#0A2924",
    fontSize: 16,
    marginLeft: 15,
  },
});
