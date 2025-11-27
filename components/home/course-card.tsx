import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import StatusText from "../status-text";
import { typography } from "@/styles/typography";

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
          <ThemedText style={styles.progressText}>1/3 sections débloquées</ThemedText>
          <StatusText />
        </View>
        <ThemedText style={styles.title}>{toolConstants.title}</ThemedText>
        <ThemedText style={styles.description}>{toolConstants.description}</ThemedText>
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
  progressText: StyleSheet.compose(typography.caption, {
    color: "#1C5348",
    flex: 1,
  }),
  statusButton: {
    width: 68,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 4,
  },
  statusText: StyleSheet.compose(typography.body, {
    color: "#0A2924",
  }),
  title: StyleSheet.compose(typography.title, {
    color: "#0A2924",
    marginBottom: 7,
    marginLeft: 15,
  }),
  description: StyleSheet.compose(typography.body, {
    color: "#0A2924",
    marginLeft: 15,
  }),
});
