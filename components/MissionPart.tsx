import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import JouerButton from "@/components/ui/JouerButton";
import characters from "@/constants/characters";
import { getLevelDataByNumber } from "@/hooks/use-level-data";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import useCompletedLevelsStore from "@/store/useCompletedLevels";
import CustomAnimation from "./animations/CustomAnimation";

export default function MissionPart({
  title,
  image,
  imageDisabled,
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
    <View>
      <View style={[styles.button, { backgroundColor: toolConstants.color }]}>
        <Text style={styles.text5}>{title}</Text>
      </View>

      <TouchableOpacity
        disabled={disabled}
        onPress={() =>
          router.replace(`/mission/${practiceTool}/${levelNumber}`)
        }
      >
        <View style={styles.sectionRow}>
          <CustomAnimation animationData={getAnimationData()} />
          <JouerButton
            image={disabled ? imageDisabled : image}
            disabled={disabled}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  chouette: {
    height: 385,
    marginBottom: 15,
    borderWidth: 1,
  },
  text5: {
    color: "#F2FBF8",
    fontSize: 24,
    fontWeight: "bold",
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  playButtonText: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
  },
});
