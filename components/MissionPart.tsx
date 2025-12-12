import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import JouerButton from "@/components/ui/JouerButton";
import characters from "@/constants/characters";
import { getLevelDataByNumber } from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import useCompletedLevelsStore from "@/store/useCompletedLevels";
import { isMobile } from "@/utils/isMobile";
import CustomAnimation from "./animations/CustomAnimation";

export default function MissionPart({
  title,
  image,
  imageDisabled = undefined,
  levelNumber,
}: {
  title: string;
  image: any;
  imageDisabled: any;
  levelNumber: number;
}) {
  const { practiceTool, toolConstants } = usePracticeToolConstants();
  const { character } = getLevelDataByNumber(
    practiceTool as string,
    levelNumber
  );
  const { levelsCompleted } = useCompletedLevelsStore();
  const practicetoolLevelsCompleted =
    levelsCompleted[practiceTool as keyof typeof levelsCompleted];
  const isPreviousLevelCompleted =
    practicetoolLevelsCompleted?.[levelNumber - 1];

  const getAnimationData = () => {
    const bureauAnimations =
      characters?.[character as keyof typeof characters]?.bureau;
    switch (practiceTool) {
      case "spreadsheet":
        return bureauAnimations?.vert;
      case "textEditor":
        return bureauAnimations?.bleu;
      default:
        return "";
    }
  };

  const disabled = !(levelNumber === 1) && !isPreviousLevelCompleted;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View
          style={[
            styles.partTitleContainer,
            { backgroundColor: toolConstants.color },
          ]}
        >
          <Text style={styles.partTitleText}>{title}</Text>
        </View>
        {isMobile && (
          <JouerButton
            image={disabled ? imageDisabled : image}
            disabled={disabled}
          />
        )}
      </View>

      <TouchableOpacity
        style={styles.sectionRow}
        disabled={disabled}
        onPress={() =>
          router.replace(`/mission/${practiceTool}/${levelNumber}`)
        }
      >
        <View style={styles.animationContainer}>
          <CustomAnimation
            animationData={getAnimationData()}
            style={styles.animation}
          />
        </View>

        {!isMobile && (
          <JouerButton
            image={disabled ? imageDisabled : image}
            disabled={disabled}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flexDirection: "row", justifyContent: "center" },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  partTitleContainer: {
    alignSelf: "flex-start",
    borderRadius: 8,
    borderTopLeftRadius: 0,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 100,
  },
  partTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2FBF8",
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  playButtonText: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#292929",
  },
  animationContainer: {
    borderWidth: 1,
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});
