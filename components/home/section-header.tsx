import StatusText from "@/components/status-text";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SectionHeader() {
  const { toolConstants, practiceTool } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.sectionHeaderContainer,
        { backgroundColor: toolConstants.color },
      ]}
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

          <Text style={styles.text}>{"3 niveaux"}</Text>
        </View>
        <StatusText />
      </View>
      <View>
        <Text style={styles.text3}>{"Section 1"}</Text>
        <Text style={styles.text4}>{"Apprendre les bases"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
  text: {
    fontSize: 8,
    color: "#1C5348",
  },
  text3: {
    fontSize: 22,
    color: "#0A2924",
    marginBottom: 7,
  },
  text4: {
    fontSize: 10,
    lineHeight: 24,
    color: "#0A2924",
    marginRight: 86,
    width: 151,
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
