import usePracticeTool from "@/context/usePracticeTool";
import { Image, StyleSheet, Text, View } from "react-native";

export function CourseCard() {
  const { toolConstants } = usePracticeTool();
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/ldtg9pud_expires_30_days.png")}
        resizeMode="stretch"
        style={styles.thumbnail}
      />
      <View style={[styles.content, { backgroundColor: toolConstants.color }]}>
        <View style={styles.header}>
          <Text style={styles.progressText}>1 Section/3 niveaux</Text>
          <View
            style={[
              styles.statusButton,
              { backgroundColor: toolConstants.secondaryColor },
            ]}
          >
            <Text style={styles.statusText}>En cours</Text>
          </View>
        </View>
        <Text style={styles.title}>{toolConstants.title}</Text>
        <Text style={styles.description}>{toolConstants.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 32,
  },
  thumbnail: {
    width: 173,
    height: 173,
    marginRight: 16,
  },
  content: {
    width: 552,
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
