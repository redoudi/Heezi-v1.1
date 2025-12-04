import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import BackButton from "@/components/ui/back-button";
import characters from "@/constants/characters";
import useLevelData from "@/hooks/use-level-data";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function IntroText({ intro = "..." }) {
  return (
    <View style={styles.introTextBox}>
      <Text style={styles.introText}>{intro}</Text>
    </View>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

export default function ScenarioScreen() {
  const { intro, character } = useLevelData();
  const { practiceTool, id } = useLocalSearchParams();
  const { height, width } = useWindowDimensions();

  const handleStart = () =>
    router.push(`/mission/${practiceTool}/${id}/practice`);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View
        style={[
          styles.mainContent,
          { height: height - 24, maxWidth: Math.min(width - 32, 633) },
        ]}
      >
        <BackButton style={styles.backButton} />
        <Image
          source={
            character
              ? characters?.[character as keyof typeof characters]?.intro
              : ""
          }
          resizeMode={"contain"}
          style={styles.boxImage}
        />
        <View>
          <IntroText intro={intro} />
          <ButtonWithArrow text={"Commencer"} onPress={handleStart} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,

    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    paddingHorizontal: 16,
    gap: 8,
    width: "100%",
  },
  backButton: {
    marginBottom: 16,
    marginHorizontal: 0,
    alignSelf: "flex-start",
  },
  boxImage: {
    borderRadius: 8,
    alignSelf: "stretch",
    flex: 1,
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    marginBottom: 16,
  },

  introTextBox: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#292929",
  },

  startButton: {
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 11,
  },
  triangleIcon: {
    alignSelf: "center",
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
