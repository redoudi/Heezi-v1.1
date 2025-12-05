import useLevelData from "@/hooks/use-level-data";
import { isMobile } from "@/utils/isMobile";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import RibbonTabs from "../spreadsheet/ribbon/spreadsheet-ribbon-tabs";
import ContentPage from "./ContentPage";
import TextEditorHeader from "./TextEditorHeader";
import TitleBar from "./TextEditorTitleBar";
import { SafeAreaView } from "react-native-safe-area-context";

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.pageNumberContainer}>
      <Text
        style={[{ fontSize: 12, fontWeight: "bold" }, styles.pageNumberText]}
      >{`Page ${currentPage}/${totalPages}`}</Text>
    </View>
  );
}

export default function TextEditorScreen() {
  const { height } = useWindowDimensions();
  const { levelType } = useLevelData();
  const isLesson = levelType === "lesson";
  return (
    <SafeAreaView style={[styles.mainContainer, { height: height || "100%" }]}>
      <View style={styles.mainContent}>
        {!isMobile && <TitleBar />}
        <RibbonTabs />
        <TextEditorHeader />
        <ContentPage />
        <PageNumber currentPage={1} totalPages={1} />
        {isLesson && <View style={styles.overlay} />}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    maxWidth: 1440,
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
