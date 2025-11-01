import { LeftColumn } from "@/components/home/left-column";
import { RightColumn } from "@/components/home/right-column";
import { PracticeToolProvider } from "@/context/usePracticeTool";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PracticeToolProvider>
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
      </PracticeToolProvider>
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
});
