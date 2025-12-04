import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, View } from "react-native";
import StatusText from "../status-text";

export function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View style={styles.container}>
      <Image source={toolConstants.icon} resizeMode={"contain"} />
      <View
        style={[styles.mainContent, { backgroundColor: toolConstants.color }]}
      >
        <View>
          <Text style={styles.title}>{toolConstants.title}</Text>
          <Text style={styles.description}>{toolConstants.description}</Text>
        </View>
        <StatusText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  mainContent: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 22,
    color: "#black",
  },
  description: { fontSize: 12, color: "#black" },
});
