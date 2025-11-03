import BackButton from "@/components/ui/back-button";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
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
    <Image source={imageSource} resizeMode={"stretch"} style={styles.avatar} />
  );
}

function IntroText({ intro = "..." }) {
  return (
    <View style={styles.introTextBox}>
      <Text style={styles.text}>{intro}</Text>
    </View>
  );
}

function TriangleIcon({ style }: { style: StyleProp<ImageStyle> }) {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/q6vunbbw_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={style}
    />
  );
}

function StartButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.StartButtonContainer2}>
      <TouchableOpacity style={styles.startButton} onPress={onPress}>
        <Text style={styles.buttonText}>{"Commencer"}</Text>
        <TriangleIcon style={styles.triangleIcon} />
      </TouchableOpacity>
    </View>
  );
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
      <View style={styles.content}>
        <BackButton style={styles.backButton} />
        <Avatar imageSource={imageSource} />
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
  content: { borderWidth: 2 },
  avatar: {
    borderRadius: 8,
    width: 568,
    height: 711,
    marginBottom: 16,
    marginHorizontal: 16,
    alignSelf: "center",
  },

  StartButtonContainer2: {
    backgroundColor: "#FFFFFF",
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
  },

  startButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 391,
  },

  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  text: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },

  backButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,

    marginBottom: 16,
    marginHorizontal: 32,
    alignSelf: "flex-start",
  },

  introTextBox: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    marginBottom: 8,
    marginLeft: 16,
  },
});
