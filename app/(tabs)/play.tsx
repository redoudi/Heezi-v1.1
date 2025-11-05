import { LeftColumn } from "@/components/home/left-column";
import { RightColumn } from "@/components/home/right-column";
import { SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LeftColumn />
      <RightColumn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "center",
    marginRight: 32,
    marginTop: 16,
  },
});
