import BackButton from "@/components/ui/back-button";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
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
    <View style={styles.view4}>
      <Text style={styles.text}>{intro}</Text>
    </View>
  );
}

function StartButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.view3}>
      <View style={styles.column2}>
        <TouchableOpacity style={styles.buttonRow} onPress={onPress}>
          <Text style={styles.text2}>{"Commencer"}</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/q6vunbbw_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image3}
          />
        </TouchableOpacity>
      </View>
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
  content: {
    borderWidth: 1,
  },
  avatar: {
    borderRadius: 8,
    width: 568,
    height: 711,
    marginBottom: 16,
    marginHorizontal: 16,
    alignSelf: "center",
  },
  buttonRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 391,
  },

  column2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  image3: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  text: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
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
  view3: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  view4: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 57,
    marginBottom: 8,
    marginLeft: 16,
  },
});
