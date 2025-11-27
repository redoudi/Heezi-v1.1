import useLevelData from "@/hooks/use-level-data";
import { SafeAreaView, StyleSheet, View, useWindowDimensions } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";
import ContentPage from "./ContentPage";
import TextEditorHeader, { TitleBar } from "./TextEditorHeader";

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.pageNumberContainer}>
      <ThemedText
        style={[typography.bodyBold, styles.pageNumberText]}
      >{`Page ${currentPage}/${totalPages}`}</ThemedText>
    </View>
  );
}

function ProgressBar() {
  return (
    <View style={styles.progressBarContainer1}>
      <View style={styles.progressBarContainer2}>
        <View style={styles.progressBar}></View>
      </View>
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
        <View style={styles.titleBarContainer}>
          <TitleBar />
        </View>
        <View style={styles.interactiveSection}>
          <TextEditorHeader />
          <ContentPage />
          <PageNumber currentPage={1} totalPages={1} />
          <View style={styles.progressBarColumn}>
            <View style={styles.ProgressBarRow}>
              <ProgressBar />
            </View>
          </View>
          {isLesson && <View style={styles.overlay} />}
        </View>
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
  interactiveSection: {
    flex: 1,
    position: "relative",
  },
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
