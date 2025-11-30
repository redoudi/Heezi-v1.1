import StatusText from "@/components/status-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
      <Text style={styles.retourButtonText}>{"Retour"}</Text>
    </TouchableOpacity>
  );
}

export default function SectionHeader() {
  const { toolConstants, practiceTool } = usePracticeToolConstants();
  return (
    <View
      style={[styles.mainContainer, { backgroundColor: toolConstants.color }]}
    >
      <View style={styles.row}>
        <View style={styles.retourAndToolNameContainer}>
          <RetourButton />
          <View>
            <Text
              style={styles.toolNameText}
            >{`Outil : ${toolConstants.name}`}</Text>
          </View>
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
