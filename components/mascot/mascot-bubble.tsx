import useCursor from "@/context/useCursor";
import useLevelData from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { getElementBottomHeight } from "@/utils/cursorUtils";
import { useEffect, useState } from "react";
import { Image, LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle, useWindowDimensions } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography, withTextStyle } from "@/styles/typography";
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
      <View style={[styles.textBoxAndTriangle, textBoxAndTriangleStyle]}>
        <View style={styles.textContainer}>
          <ThemedText style={styles.dialogText}>{bubbleText || "..."}</ThemedText>
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
    contentsRefs,
  } = useCursor();
  const { height: windowHeight } = useWindowDimensions();
  const [componentHeight, setComponentHeight] = useState<number>(300); // Default fallback
  const [topStyle, setTopStyle] = useState<ViewStyle>({});

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
      setTopStyle(calculatedTopStyle);
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
      style={topStyle}
      onLayout={handleLayout}
    />
  );
}

const styles = StyleSheet.create({
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
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    maxWidth: 800,
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

  dialogText: withTextStyle(typography.bodyLargeBold, {
    color: "#FFFFFF",
    marginBottom: 31,
  }),
});
