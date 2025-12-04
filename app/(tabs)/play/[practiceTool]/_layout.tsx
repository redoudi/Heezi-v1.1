import { RightColumn } from "@/components/home/right-column";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";

import { isMobile } from "@/utils/isMobile";
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

function ResponsiveWrapper({ children }: { children: React.ReactNode }) {
  return isMobile ? (
    <ScrollView
      style={styles.mobileScrollView}
      contentContainerStyle={styles.mobileContentContainer}
    >
      {children}
    </ScrollView>
  ) : (
    <ScrollView
      style={styles.scrollView}
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={[styles.contentContainer]}
    >
      {children}
    </ScrollView>
  );
}

export default function HomeScreenLayout() {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.safeArea, { height: height || "100%" }]}>
      <ResponsiveWrapper>
        <LeftColumn />
        <RightColumn />
      </ResponsiveWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {},
  scrollView: {},
  contentContainer: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 32,
    justifyContent: "space-between",
  },
  mobileContentContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  mobileScrollView: {
    flex: 1,
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
