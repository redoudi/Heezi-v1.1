import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import FunctionBar from "./function-bar";
import SpreadsheetGrid from "./grid/spreadsheet-grid";
import Ribbon from "./ribbon/spreadsheet-ribbon";
import RibbonTabs from "./ribbon/spreadsheet-ribbon-tabs";

import useLevelData from "@/hooks/use-level-data";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleBar from "./title-bar";

function LevelStats() {
  return (
    <View style={styles.column13}>
      <View style={styles.row16}>
        <Image
          source={require("@/assets/images/4z87rs57_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image36}
        />
        <TouchableOpacity style={styles.button28} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/o6j3pvf5_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image37}
          />
        </TouchableOpacity>
        <View style={styles.view12}>
          <View style={styles.view13}>
            <View style={styles.box4}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function SpreadsheetScreen() {
  const { height } = useWindowDimensions();
  const { levelType } = useLevelData();
  const isLesson = levelType === "lesson";
  return (
    <SafeAreaView style={[styles.mainContainer, { height: height || "100%" }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        style={styles.scrollView}
        contentContainerStyle={styles.scrollBody}
      >
        <View style={styles.mainContent}>
          <TitleBar />

          <View style={styles.interactiveSection}>
            <View style={styles.column2}>
              <RibbonTabs />
              <Ribbon />
              <FunctionBar />
            </View>
            <SpreadsheetGrid />
            {/* <LevelStats /> */}
            {isLesson && <View style={styles.overlay} />}
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: "#EFEFEF",

    borderWidth: 1,
    borderColor: "#EFEFEF",
    flex: 1,
  },

  mainContent: {},
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
