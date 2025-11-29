import useCursor from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function TitleBar() {
  const titleBarRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  const { levelType } = useLevelData();
  const { practiceTool } = usePracticeToolConstants();
  useEffect(() => {
    if (setContentRef && levelType === "lesson") {
      setContentRef("titleBar", titleBarRef);
    }
  }, [setContentRef, levelType]);
  return (
    <View style={styles.mainContent} ref={titleBarRef}>
      <View style={styles.leftRow}>
        <Image
          source={require("@/assets/images/5jt7jwsg_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.spreadsheeticon}
        />
        <Image
          source={require("@/assets/images/os183jfm_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.saveIcon}
        />
        <Image
          source={require("../../../assets/images/undo.png")}
          resizeMode={"contain"}
          style={styles.undoIcon}
        />
        <Image
          source={require("../../../assets/images/redo.png")}
          resizeMode={"contain"}
          style={styles.redoIcon}
        />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
        }
      >
        <Image
          source={require("@/assets/images/iycoag37_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.backButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spreadsheeticon: {
    height: 32,
  },
  saveIcon: {
    height: 32,
  },
  undoIcon: {
    height: 32,
  },
  redoIcon: {
    height: 32,
  },
  backButton: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    marginRight: 32,
  },
  backButtonIcon: {
    height: 28,
  },
});
