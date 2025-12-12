import HomeHeader, { TitleBanner } from "@/components/home/HomeHeader";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function RetourButton() {
  const { practiceTool } = usePracticeToolConstants();
  return (
    <TouchableOpacity
      onPress={() => router.replace(`/(tabs)/play/${practiceTool}`)}
      style={styles.retourButton}
    >
      <Image
        source={require("@/assets/images/z1q84zux_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.triangleIcon}
      />
    </TouchableOpacity>
  );
}

export default function SectionHeader() {
  const { toolConstants } = usePracticeToolConstants();
  return (
    // <View style={styles.mainContainer}>
    //   <View style={styles.row}>
    //     <RetourButton />
    //   </View>
    <HomeHeader>
      {/* <View style={styles.row}>
        <RetourButton />
      </View> */}
      <View style={styles.flexDirectionRow}>
        <RetourButton />

        <TitleBanner title={"Section 1"} description={"Apprendre les bases"} />
      </View>
    </HomeHeader>
    // </View>
  );
}

const styles = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
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
    borderWidth: 1,
  },
  retourButtonText: {
    fontSize: 12,
  },
  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 16,
  },
});
