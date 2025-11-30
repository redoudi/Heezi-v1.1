import useCursor from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import { getElementBottomHeight } from "@/utils/cursorUtils";
import { useEffect, useState } from "react";
import {
  Image,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useWindowDimensions,
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

export function MascotBubble({
  bubbleText,
  nextStep,
}: {
  bubbleText: string;
  nextStep: () => void | null;
}) {
  const { levelType } = useLevelData();
  const {
    currentStep: { cursor },
    contentsRefs,
  } = useCursor();
  const { height: windowHeight } = useWindowDimensions();
  const [componentHeight, setComponentHeight] = useState<number>(300); // Default fallback
  const [mascotPosition, setMascotPosition] = useState<ViewStyle>({
    bottom: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };

  const padding = 20;
  const minTop = 0; // Minimum top position
  const maxTop = Math.max(minTop, windowHeight - componentHeight - padding);

  useEffect(() => {
    if (cursor && contentsRefs && cursor.elementId) {
      const calculatedTop =
        cursor.elementId && contentsRefs.current[cursor.elementId]
          ? getElementBottomHeight(contentsRefs, cursor.elementId)
          : undefined;

      const calculatedTopStyle =
        calculatedTop !== undefined
          ? {
              bottom: undefined,
              top: Math.max(minTop, Math.min(calculatedTop, maxTop)),
            }
          : { bottom: 0 };
      setMascotPosition(calculatedTopStyle);
    }
  }, [cursor, contentsRefs, minTop, maxTop]);

  // const spreadSheetStyle =
  //   practiceTool === "spreadsheet" ? { bottom: undefined } : {};

  // const style = { ...spreadSheetStyle, ...topStyle };

  const DownArrowNextStep = nextStep && levelType === "lesson" && (
    <SuivantBtn text="Suivant" onPress={nextStep} />
  );

  // useEffect(() => {
  //   console.log("currentStep", currentStep);
  //   console.log("contentRef", contentsRefs);
  //   if (currentStep && contentsRefs) {
  //     const bottomHeight = getElementBottomHeight(
  //       contentsRefs,
  //       currentStep?.cursor?.elementId
  //     );
  //     console.log("bottomHeight", bottomHeight);
  //   }
  // }, [currentStep, contentsRefs]);

  return (
    <MascotDialog
      bubbleText={bubbleText}
      downArrowNextStep={DownArrowNextStep}
      style={mascotPosition}
      onLayout={handleLayout}
    />
  );
}

const CornerTriangle = () => {
  return (
    <View style={styles.triangleContainer}>
      <View style={styles.triangle} />
    </View>
  );
};

export const MascotDialog = ({
  bubbleText,
  downArrowNextStep = undefined,
  style = undefined,
  textContainerStyle = undefined,
  onLayout,
}: {
  bubbleText: string;
  downArrowNextStep: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
}) => {
  const DownArrowNextStep = downArrowNextStep;
  return (
    <View style={[styles.mainContainer, style]} onLayout={onLayout}>
      <View style={styles.textBoxAndTriangle}>
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={styles.dialogText}>{bubbleText || "..."}</Text>
          {DownArrowNextStep}
        </View>
        <CornerTriangle />
      </View>
      <MascotIcon />
    </View>
  );
};
const styles = StyleSheet.create({
  triangleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: "auto",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: "transparent",
    borderTopColor: "rgba(82,82,82,0.8)",
  },
  mainContainer: {
    position: "absolute",
    right: 0,
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  textBoxAndTriangle: {
    marginTop: 64,
    flexDirection: "row",

    // alignItems: "flex-end",
    // maxWidth: 800,
    // height: "100%",
  },
  textContainer: {
    backgroundColor: "rgba(82,82,82,0.8)",
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 16,
    maxWidth: 600,

    // flex: 1,
  },

  cornerTriangle: {
    width: 42,
    marginBottom: "auto",
    borderWidth: 1,
    borderColor: "green",
  },
  mascot: {
    width: 88,
    height: 88,
  },

  dialogText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
