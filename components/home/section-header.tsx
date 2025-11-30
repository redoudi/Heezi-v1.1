import StatusText from "@/components/status-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SectionHeader() {
  const { toolConstants, practiceTool } = usePracticeToolConstants();
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: toolConstants.color }]}
    >
      <View style={styles.row}>
        <View style={styles.row2}>
          <TouchableOpacity
            onPress={() => router.replace(`/(tabs)/play/${practiceTool}`)}
          >
            <View style={styles.view}>
              <Image
                source={require("@/assets/images/z1q84zux_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.levelsNumberText}>{"3 niveaux"}</Text>
        </View>
        <StatusText />
      </View>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionNumberText}>{"Section 1"}</Text>
        <Text style={styles.sectionTitleText}>{"Apprendre les bases"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
  row2: {
    width: 138,
    flexDirection: "row",
    alignItems: "center",
  },
  levelsNumberText: {
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
  view: {
    width: 62,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 16,
  },
});
