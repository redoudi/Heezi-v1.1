import BackButton from "@/components/ui/back-button";
import useLevelData from "@/hooks/use-level-data";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Avatar({ imageSource }: { imageSource: ImageSourcePropType }) {
  return (
    <Image source={imageSource} resizeMode={"contain"} style={styles.avatar} />
  );
}

function IntroText({ intro = "..." }) {
  return (
    <View style={styles.introTextBox}>
      <Text style={styles.introText}>{intro}</Text>
    </View>
  );
}

function TriangleIcon({ style }: { style: StyleProp<ImageStyle> }) {
  return (
    <Image
      source={require("@/assets/images/q6vunbbw_expires_30_days.png")}
      resizeMode={"stretch"}
      style={style}
    />
  );
}

function StartButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.startButton} onPress={onPress}>
      <Text style={styles.buttonText}>{"Commencer"}</Text>
      <TriangleIcon style={styles.triangleIcon} />
    </TouchableOpacity>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

export default function ScenarioScreen() {
  const askingForHelpImage = require("@/assets/images/asking-for-help.png");
  const heeziIdleImage = require("@/assets/images/heezi-idle.png");

  const { intro, levelType } = useLevelData();
  const { practiceTool, id } = useLocalSearchParams();

  const imageSource =
    levelType === "practice" ? askingForHelpImage : heeziIdleImage;

  const handleStart = () =>
    router.push(`/mission/${practiceTool}/${id}/practice`);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <BackButton style={styles.backButton} />
        <Image
          source={imageSource}
          resizeMode={"contain"}
          style={styles.avatar}
        />
        <IntroText intro={intro} />

        <StartButton onPress={handleStart} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  mainContent: {
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    marginHorizontal: 40,
    borderWidth: 1,
    paddingHorizontal: 16,
    gap: 8,
    width: 633,
  },
  backButton: {
    marginBottom: 16,
    marginHorizontal: 0,
    alignSelf: "flex-start",
  },
  avatar: {
    borderRadius: 8,
    alignSelf: "center",
    width: 533,
    height: 653,
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
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
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
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
