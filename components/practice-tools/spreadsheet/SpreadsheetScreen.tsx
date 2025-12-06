import { ScrollView, StyleSheet, View } from "react-native";
import FunctionBar from "./function-bar";
import SpreadsheetGrid from "./grid/spreadsheet-grid";
import SpreadsheetRibbon from "./ribbon/spreadsheet-ribbon";
import RibbonTabs from "./ribbon/spreadsheet-ribbon-tabs";

import MascotMonitor from "@/components/mascot/mascot-monitor";
import useLevelData from "@/hooks/use-level-data";
import { isMobile } from "@/utils/isMobile";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "./title-bar";

const ResponsiveWrapper = ({ children }: { children: React.ReactNode }) => {
  return isMobile ? (
    <View style={mobileStyles.mainContainer}>{children}</View>
  ) : (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      style={styles.scrollView}
      contentContainerStyle={styles.scrollBody}
    >
      {children}
    </ScrollView>
  );
};

const mobileStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    height: "100%",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
});

export default function SpreadsheetScreen({
  runPreActions,
  practiceToolData,
  checkConditionCallback,
}: {
  runPreActions: (preActions: any[]) => void;
  practiceToolData: any;
  checkConditionCallback: (expected: any) => boolean;
}) {
  const { levelType } = useLevelData();
  const isLesson = levelType === "lesson";
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ResponsiveWrapper>
        <View style={styles.mainContent}>
          <TitleBar />
          <RibbonTabs />
          <SpreadsheetRibbon />
          <FunctionBar />
          <SpreadsheetGrid />
          {isLesson && <View style={styles.overlay} />}
        </View>
      </ResponsiveWrapper>
      <MascotMonitor
        runPreActions={runPreActions}
        practiceToolData={practiceToolData}
        checkConditionCallback={checkConditionCallback}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  scrollView: {
    alignSelf: "stretch",
  },
  scrollBody: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "#EFEFEF",
    flex: 1,
  },

  mainContent: { backgroundColor: "#EFEFEF" },
  titleBarContainer: {
    zIndex: 1001,
    position: "relative",
  },
  interactiveSection: {
    position: "relative",
  },
  column2: {
    marginTop: 2,
    marginBottom: 3,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  column13: {
    alignSelf: "flex-start",
    marginBottom: 32,
    marginLeft: 32,
  },
  row16: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image36: {
    width: 87,
    height: 53,
    marginRight: 16,
  },
  button28: {
    width: 62,
    alignItems: "center",
    backgroundColor: "#33C6FD",
    borderRadius: 8,
    paddingVertical: 16,
    marginRight: 16,
  },
  image37: {
    borderRadius: 8,
    width: 30,
    height: 22,
  },
  view12: {
    width: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 23,
  },
  view13: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
  box4: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },
});
