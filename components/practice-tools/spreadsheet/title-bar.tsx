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
    <View style={styles.mainContainer} ref={titleBarRef}>
      <View style={styles.leftRow}>
        <Image
          source={require("@/assets/images/5jt7jwsg_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.icon}
        />
        <Image
          source={require("@/assets/images/save.png")}
          resizeMode={"contain"}
          style={styles.icon}
        />
        <Image
          source={require("../../../assets/images/undo.png")}
          resizeMode={"contain"}
          style={styles.icon}
        />
        <Image
          source={require("../../../assets/images/redo.png")}
          resizeMode={"contain"}
          style={styles.icon}
        />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
        }
      >
        <Image
          source={require("@/assets/images/escape.png")}
          resizeMode={"contain"}
          style={styles.backButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 32,
    paddingTop: 8,
    zIndex: 1001,
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  icon: {
    maxWidth: 52,
    height: 32,
  },

  backButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
  },
  backButtonIcon: {
    width: 20,
    height: 20,
  },
});
