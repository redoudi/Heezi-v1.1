import useLevelData from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

const DownArrow = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <TouchableOpacity onPress={nextStep}>
      <Image
        source={require("@/assets/images/ojvjgq96_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image31}
      />
    </TouchableOpacity>
  );
};

const CornerTriangle = () => {
  return (
    <Image
      source={require("@/assets/images/662flub1_expires_30_days.png")}
      resizeMode={"contain"}
      style={styles.cornerTriangle}
    />
  );
};

const Mascot = () => {
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
        <CornerTriangle />
      </View>
      <Mascot />
    </View>
  );
};

export default function MascotBubbleOrModal({
  bubbleText,
  nextStep,
}: {
  bubbleText: string;
  nextStep: () => void | null;
}) {
  const { levelType } = useLevelData();
  const MascotBubbleComponent = () => MascotBubble({ bubbleText, nextStep });
  if (levelType === "lesson") {
    return (
      <TouchableWithoutFeedback onPress={nextStep} accessible={false}>
        <View style={styles.overlayContainer}>
          <View style={styles.mainContainer}>
            <MascotBubbleComponent />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return <MascotBubbleComponent />;
  }
}

export function MascotBubble({
  bubbleText,
  nextStep,
}: {
  bubbleText: string;
  nextStep: () => void | null;
}) {
  const { levelType } = useLevelData();
  const { practiceTool } = usePracticeToolConstants();
  const DownArrowNextStep = nextStep && levelType === "lesson" && (
    <DownArrow nextStep={nextStep} />
  );
  return (
    <MascotDialog
      bubbleText={bubbleText}
      downArrowNextStep={DownArrowNextStep}
      style={practiceTool === "spreadsheet" ? { bottom: 300 } : {}}
    />
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    bottom: 16,
    right: 0,
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "flex-end",
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
    flex: 1,
  },
  image31: {
    width: 32,
    height: 21,
  },
  cornerTriangle: {
    width: 42,
    height: 61,
    alignSelf: "flex-start",
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
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
