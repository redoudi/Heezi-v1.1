import HomeHeader, { TitleBanner } from "@/components/home/HomeHeader";
import CustomTouchableOpacity from "@/components/home/section-card/CustomTouchableOpacity";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

function RetourButton() {
  const { practiceTool } = usePracticeToolConstants();
  return (
    <CustomTouchableOpacity
      onPress={() => router.replace(`/(tabs)/play/${practiceTool}`)}
      containerStyle={styles.retourButton}
    >
      <Image
        source={require("@/assets/images/z1q84zux_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.triangleIcon}
      />
    </CustomTouchableOpacity>
  );
}

export default function SectionHeader() {
  const {
    toolConstants: { sectionDescription },
  } = usePracticeToolConstants();

  return (
    <HomeHeader>
      <View style={styles.mainContent}>
        <RetourButton />
        <TitleBanner title={"Section 1"} description={sectionDescription} />
      </View>
    </HomeHeader>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    gap: 16,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  retourAndToolNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  toolNameText: {
    fontSize: 12,
    color: "#1C5348",
  },
  sectionNumberText: {
    fontSize: 22,
    color: "#0A2924",
    marginBottom: 7,
  },
  sectionTitleText: {
    fontSize: 12,
    lineHeight: 24,
    color: "#0A2924",
  },
  retourButton: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  retourButtonText: {
    fontSize: 12,
  },
  triangleIcon: {
    borderRadius: 8,
    width: 20,
    height: 20,
  },
});
