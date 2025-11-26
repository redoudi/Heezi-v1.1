import { RightColumn } from "@/components/home/right-column";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import { Slot } from "expo-router";

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const minWidth = 1200; // Minimum width to prevent content from being hidden

  return (
    <SafeAreaView style={[styles.safeArea, { height: height || "100%" }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
        style={styles.horizontalScroll}
      >
        <View style={[styles.container, { minWidth }]}>
          <LeftColumn />
          <RightColumn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  horizontalScroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    ...(Platform.OS === "web" && {
      minWidth: 1200,
    }),
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "center",
    marginRight: 32,
    marginTop: 16,
    ...(Platform.OS === "web" && {
      minWidth: 1200,
      flexShrink: 0,
    }),
  },
});

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

const styles2 = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: "stretch",
    marginRight: 16,
  },
  leftColumn: {
    flex: 1,
  },
  leftColumnContent: {
    flex: 1,
    alignSelf: "center",
  },
  contentContainer: {
    paddingTop: 32,
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
