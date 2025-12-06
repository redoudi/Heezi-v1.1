import MascotMonitor from "@/components/mascot/mascot-monitor";
import useLevelData from "@/hooks/use-level-data";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RibbonTabs from "../spreadsheet/ribbon/spreadsheet-ribbon-tabs";
import ContentPage from "./ContentPage";
import TextEditorRibbon from "./TextEditorRibbon";
import TitleBar from "./TextEditorTitleBar";

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.pageNumberContainer}>
      <Text
        style={[{ fontSize: 12, fontWeight: "bold" }, styles.pageNumberText]}
      >{`Page ${currentPage}/${totalPages}`}</Text>
    </View>
  );
}

export default function TextEditorScreen({
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
    <SafeAreaView style={[styles.mainContainer]}>
      <View style={styles.mainContent}>
        <TitleBar />
        <RibbonTabs />
        <TextEditorRibbon />
        <ContentPage />
        <PageNumber currentPage={1} totalPages={1} />
        {isLesson && <View style={styles.overlay} />}
      </View>
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
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  mainContent: {
    maxWidth: 1440,
    width: "100%",
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  titleBarContainer: {
    zIndex: 1001,
    position: "relative",
  },
  interactiveSection: {},
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  pageNumberContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  pageNumberText: {
    color: "#292929",
  },
  progressBarColumn: {
    alignSelf: "flex-start",
    marginBottom: 32,
    marginLeft: 32,
  },
  ProgressBarRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 16,
  },
  progressBarContainer1: {
    width: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 22,
  },
  progressBarContainer2: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
  progressBar: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },
});
