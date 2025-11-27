import FullWindowContainer from "@/components/FullWindowContainer";
import CustomAnimation from "@/components/animations/CustomAnimation";
import { EndLevelReport } from "@/components/result/EndLevelReport";
import { ButtonWithArrow } from "@/components/ui/ButtonWithArrow";
import characters from "@/constants/characters";
import useLevelData from "@/hooks/use-level-data";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { typography, withTextStyle } from "@/styles/typography";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

export default function ResultScreen() {
  const { practiceTool, id } = useLocalSearchParams<{
    practiceTool: string;
    id: string;
  }>();
  const { levelType, character, endLevelReport } = useLevelData();

  const goToNextPage = () => {
    if (levelType === "practice") {
      router.push(`/mission/${practiceTool}/${id}/export`);
    } else {
      router.replace(`/(tabs)/play/${practiceTool}/section-screen`);
    }
  };

  return (
    <FullWindowContainer style={styles.mainContainer}>
      <View style={styles.mainContent}>
        <View style={styles.imageBox}>
          <CustomAnimation
            animationData={
              characters[character as keyof typeof characters]?.fin || ""
            }
          />
        </View>
        <View>
          <EndLevelReport
            title={endLevelReport?.title || "Bravo !"}
            description={
              endLevelReport?.description || "Tu as réussi la mission"
            }
          />
          <ButtonWithArrow text={"Continuer"} onPress={goToNextPage} />
        </View>
      </View>
    </FullWindowContainer>
  );
}
const styles = StyleSheet.create({
  mainContainer: { padding: 16 },
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "space-between",
    height: "100%",
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  imageBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  buttonRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 399,
  },
  triangleIcon: {
    alignSelf: "center",
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  text7: withTextStyle(typography.headline, {
    color: "#0A2924",
    marginRight: 11,
  }),
});
