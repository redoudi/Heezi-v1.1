import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import characters from "@/constants/characters";
import usePracticeTool from "@/context/usePracticeTool";
import { getLevelDataByNumber } from "@/hooks/use-level-data";
import CustomAnimation from "./animations/CustomAnimation";

export default function MissionPart({
  title,
  image,
  levelNumber,
}: {
  title: string;
  image: any;
  levelNumber: number;
}) {
  const { practiceTool, toolConstants } = usePracticeTool();
  const { character } = getLevelDataByNumber(
    practiceTool as string,
    levelNumber
  );

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

  return (
    <View>
      <View style={styles.view3}>
        <View style={[styles.button, { backgroundColor: toolConstants.color }]}>
          <Text style={styles.text5}>{title}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          router.replace(`/mission/${practiceTool}/${levelNumber}`)
        }
      >
        <View style={styles.sectionRow}>
          <CustomAnimation animationData={getAnimationData()} />
          <Image source={image} resizeMode={"contain"} />
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
  view3: {
    marginBottom: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
