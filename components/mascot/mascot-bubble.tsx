import useCursor from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { getElementBottomHeight } from "@/utils/cursorUtils";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import SuivantBtn from "../ui/suivantBtn";

const CornerTriangleIcon = () => {
  return (
    <Image
      source={require("@/assets/images/662flub1_expires_30_days.png")}
      resizeMode={"contain"}
      style={styles.cornerTriangle}
    />
  );
};

const MascotIcon = () => {
  return (
    <Image
      source={require("@/assets/images/tfupuxd4_expires_30_days.png")}
      resizeMode={"contain"}
      style={styles.mascot}
    />
  );
};

export const MascotDialog = ({
  bubbleText,
  downArrowNextStep = undefined,
  style = undefined,
  textBoxAndTriangleStyle = undefined,
}: {
  bubbleText: string;
  downArrowNextStep: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const DownArrowNextStep = downArrowNextStep;
  return (
    <View style={[styles.mainContainer, style]}>
      <View style={[styles.textBoxAndTriangle, textBoxAndTriangleStyle]}>
        <View style={styles.textContainer}>
          <Text style={styles.dialogText}>{bubbleText || "..."}</Text>
          {DownArrowNextStep}
        </View>
        <CornerTriangleIcon />
      </View>
      <MascotIcon />
    </View>
  );
};

export function MascotBubble({
  bubbleText,
  nextStep,
}: {
  bubbleText: string;
  nextStep: () => void | null;
}) {
  const { levelType } = useLevelData();
  const { practiceTool } = usePracticeToolConstants();
  const {
    currentStep: { cursor },
    contentRef,
  } = useCursor();

  const topStyle =
    cursor?.elementId && contentRef?.current[cursor.elementId]
      ? { top: getElementBottomHeight(contentRef, cursor.elementId) }
      : {};

  const spreadSheetStyle =
    practiceTool === "spreadsheet" ? { bottom: 300 } : {};

  const style = { ...spreadSheetStyle, ...topStyle };

  const DownArrowNextStep = nextStep && levelType === "lesson" && (
    <SuivantBtn text="Suivant" onPress={nextStep} />
  );
  return (
    <MascotDialog
      bubbleText={bubbleText}
      downArrowNextStep={DownArrowNextStep}
      style={style}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "red",
    position: "absolute",
    right: 0,
    top: 400,
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textBoxAndTriangle: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: 800,
    height: "100%",
  },
  textContainer: {
    backgroundColor: "rgba(82,82,82,0.8)",
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    // flex: 1,
  },

  cornerTriangle: {
    width: 42,
    height: 61,
    // alignSelf: "flex-start",
  },
  mascot: {
    width: 150,
    height: 150,
    marginBottom: 48,
  },

  dialogText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 31,
  },
});
