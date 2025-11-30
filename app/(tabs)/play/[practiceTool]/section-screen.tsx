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
  absoluteImage: {
    position: "absolute",
    top: 9,
    left: 0,
    width: 71,
    height: 128,
  },
  column3: {
    width: 89,
  },
  image2: {
    height: 385,
    marginBottom: 16,
  },
  chouette: {
    height: 385,
    marginBottom: 15,
    borderWidth: 1,
  },
  image4: {
    width: 70,
    height: 59,
    marginTop: 35,
    marginBottom: 22,
    marginLeft: 264,
  },
  image5: {
    width: 177,
    height: 135,
    marginTop: 84,
    marginRight: 118,
  },
  image6: {
    width: 70,
    height: 59,
    marginBottom: 34,
  },
  image7: {
    width: 70,
    height: 59,
    marginBottom: 38,
    marginLeft: 18,
  },
  image8: {
    width: 70,
    height: 59,
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 39,
  },
  statusText: {
    fontSize: 10,
    lineHeight: 24,
    color: "#0A2924",
  },
  text5: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2FBF8",
  },
  view2: {
    width: 68,
    backgroundColor: "#A6E9D4",
    borderRadius: 8,
    padding: 4,
  },
  view3: {
    marginBottom: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  missionPartsContainer: {
    gap: 32,
  },
  divider: {
    height: 2,
    backgroundColor: "#EFEFEF",
    marginHorizontal: 16,
  },
});
