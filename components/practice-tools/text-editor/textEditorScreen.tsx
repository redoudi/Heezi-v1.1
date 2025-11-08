import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ContentPage from "./ContentPage";
import TextEditorHeader from "./TextEditorHeader";

function PageNumber({ currentPage = 1, totalPages = 1 }) {
  return (
    <View style={styles.pageNumberContainer}>
      <Text
        style={styles.pageNumberText}
      >{`Page ${currentPage}/${totalPages}`}</Text>
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
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <TextEditorHeader />
        <ContentPage />
        <PageNumber currentPage={1} totalPages={1} />
        <View style={styles.progressBarColumn}>
          <View style={styles.ProgressBarRow}>
            <ProgressBar />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  pageNumberContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  pageNumberText: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
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
