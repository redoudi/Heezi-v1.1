import { LeftColumn } from "@/components/home/left-column";
import { RightColumn } from "@/components/home/right-column";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentRow}>
        <LeftColumn />
        <RightColumn />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },

  contentRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
});
