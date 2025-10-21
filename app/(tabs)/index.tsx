import { LeftColumn } from "@/components/home/left-column";
import { RightColumn } from "@/components/home/right-column";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.row}>
          <View style={styles.mainContent}>
            <View style={styles.contentRow}>
              <LeftColumn />
              <RightColumn />
            </View>
          </View>
        </View>
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
  view: {
    width: 1440,
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContent: {
    width: 1121,
    marginRight: 32,
  },
  contentRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  leftColumn: {
    width: 742,
    marginTop: 32,
    marginRight: 16,
  },
  // right/left column styles moved to their components
  imageGrid3: {
    marginBottom: 8,
  },
});
