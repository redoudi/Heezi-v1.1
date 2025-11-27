import { RightColumn } from "@/components/home/right-column";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function LeftColumn() {
  return (
    <View style={styles2.wrapper}>
      <ScrollView
        style={styles2.leftColumn}
        contentContainerStyle={styles2.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles2.leftColumnContent}>
          <Slot />
        </View>
      </ScrollView>
    </View>
  );
}

export default function HomeScreen() {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ height: height || "100%" }}>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.mainContainer}
      >
        <LeftColumn />
        <RightColumn />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 10,
    borderColor: "red",
  },
  mainContainer: {
    borderWidth: 10,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    marginRight: 32,
    marginTop: 16,
  },
});

const styles2 = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: "stretch",
  },
  leftColumn: {
    marginRight: 16,
    paddingRight: 16,
  },
  leftColumnContent: {
    flex: 1,
    alignSelf: "center",
  },
  contentContainer: {
    paddingTop: 8,
  },
  actionButton: {
    marginBottom: 16,
  },
  imageGrid: {
    marginBottom: 8,
  },
  imageGrid2: {
    marginBottom: 16,
  },
});
