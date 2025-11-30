import MissionPart from "@/components/MissionPart";
import SectionHeader from "@/components/home/section-header";
import sectionButtons from "@/constants/sectionButtons";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { StyleSheet, View } from "react-native";

const Divider = () => <View style={styles.divider} />;

export default function SectionScreen() {
  const lessonAnimationData = require("@/assets/animations/RenardBureauVert.json");
  const quizAnimationData = require("@/assets/animations/RenardBureauVert.json");
  const practiceAnimationData = require("@/assets/animations/RenardBureauVert.json");

  const { toolSectionButtons } = usePracticeToolConstants();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <SectionHeader />
        <View style={styles.missionPartsContainer}>
          <MissionPart
            title="Cours"
            image={toolSectionButtons.lesson}
            levelNumber={1}
            animationData={lessonAnimationData}
          />
          <Divider />
          <MissionPart
            title="Quiz"
            image={toolSectionButtons.quiz}
            imageDisabled={sectionButtons.disabled.quiz}
            levelNumber={2}
            animationData={quizAnimationData}
          />
          <Divider />
          <MissionPart
            title="Pratique"
            image={toolSectionButtons.practice}
            levelNumber={3}
            animationData={practiceAnimationData}
            imageDisabled={sectionButtons.disabled.practice}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
  },
  mainContent: { flex: 1, borderWidth: 1, justifyContent: "flex-start" },
  missionPartsContainer: {
    gap: 0,
  },
  divider: {
    height: 2,

    backgroundColor: "#EFEFEF",
    marginHorizontal: "20%",
  },
});
