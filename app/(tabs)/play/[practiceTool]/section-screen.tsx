import MissionPart from "@/components/MissionPart";
import StatusText from "@/components/status-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function SectionScreen() {
  const lessonButtonImage = require("@/assets/images/lesson.png");
  const lessonAnimationData = require("@/assets/animations/RenardBureauVert.json");
  const quizButtonImage = require("@/assets/images/quiz.png");
  const quizAnimationData = require("@/assets/animations/RenardBureauVert.json");
  const practiceButtonImage = require("@/assets/images/practice.png");
  const practiceAnimationData = require("@/assets/animations/RenardBureauVert.json");

  const { toolConstants, practiceTool } = usePracticeToolConstants();
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View
          style={[styles.column2, { backgroundColor: toolConstants.color }]}
        >
          <View style={styles.row}>
            <View style={styles.row2}>
              <TouchableOpacity
                onPress={() => router.replace(`/(tabs)/play/${practiceTool}`)}
              >
                <View style={styles.view}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/z1q84zux_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                </View>
              </TouchableOpacity>

              <Text style={styles.text}>{"3 niveaux"}</Text>
            </View>
            <StatusText />
          </View>
          <View>
            <Text style={styles.text3}>{"Section 1"}</Text>
            <Text style={styles.text4}>{"Apprendre les bases"}</Text>
          </View>
        </View>
        <MissionPart
          title="Cours"
          image={lessonButtonImage}
          levelNumber={1}
          animationData={lessonAnimationData}
        />
        <MissionPart
          title="Quiz"
          image={quizButtonImage}
          levelNumber={2}
          animationData={quizAnimationData}
        />
        <MissionPart
          title="Pratique"
          image={practiceButtonImage}
          levelNumber={3}
          animationData={practiceAnimationData}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  absoluteImage: {
    position: "absolute",
    top: 9,
    left: 0,
    width: 71,
    height: 128,
  },
  absoluteImage2: {
    position: "absolute",
    bottom: 50,
    left: 47,
    width: 123,
    height: 135,
  },
  absoluteImage3: {
    position: "absolute",
    top: 0,
    left: 71,
    width: 69,
    height: 98,
  },
  absoluteImage4: {
    position: "absolute",
    top: 0,
    right: 161,
    left: 161,
    height: 127,
    flex: 1,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button2: {
    alignSelf: "flex-start",
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  button3: {
    alignSelf: "flex-start",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  column: {
    width: 741,
  },
  column2: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  column3: {
    width: 89,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 16,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  row2: {
    width: 138,
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 39,
  },
  text: {
    color: "#1C5348",
    fontSize: 14,
  },
  statusText: {
    color: "#0A2924",
    fontSize: 16,
  },
  text3: {
    color: "#0A2924",
    fontSize: 28,
    marginBottom: 7,
  },
  text4: {
    color: "#0A2924",
    fontSize: 16,
    marginRight: 86,
    width: 151,
  },
  text5: {
    color: "#F2FBF8",
    fontSize: 24,
    fontWeight: "bold",
  },
  view: {
    width: 62,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
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
});
