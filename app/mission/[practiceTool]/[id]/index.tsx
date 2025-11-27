import FullWindowContainer from "@/components/FullWindowContainer";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import BackButton from "@/components/ui/back-button";
import characters from "@/constants/characters";
import useLevelData from "@/hooks/use-level-data";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";

function IntroText({ intro = "..." }) {
  return (
    <View style={styles.introTextBox}>
      <ThemedText style={styles.introText}>{intro}</ThemedText>
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
  const { height } = useWindowDimensions();

  const handleStart = () =>
    router.push(`/mission/${practiceTool}/${id}/practice`);

  return (
    <FullWindowContainer>
      {/* <View style={[styles.mainContent]}> */}
      <View style={[styles.mainContent, { height: height - 24 }]}>
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
    </FullWindowContainer>
  );
}
const styles = StyleSheet.create({
  container: {
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
    width: 633,
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
  introText: StyleSheet.compose(typography.bodyLargeBold, {
    color: "#292929",
  }),

  startButton: {
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: StyleSheet.compose(typography.headline, {
    color: "#0A2924",
    marginRight: 11,
  }),
  triangleIcon: {
    alignSelf: "center",
    borderRadius: 8,
    width: 16,
    height: 24,
  },
});
