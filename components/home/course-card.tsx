import HomeHeader from "@/components/home/HomeHeader";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { StyleSheet, Text, View } from "react-native";
import StatusText from "../status-text";

export default function CourseCard() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    <HomeHeader>
      <View>
        <Text style={styles.title}>{toolConstants.title}</Text>
        <Text style={styles.description}>{toolConstants.description}</Text>
      </View>
      <StatusText />
    </HomeHeader>
  );
}

const styles = StyleSheet.create({
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
