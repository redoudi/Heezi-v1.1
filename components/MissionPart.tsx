import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chouette from "./animations/Chouette";

import usePracticeTool from "@/context/usePracticeTool";

export default function MissionPart({
  title,
  image,
  levelNumber,
}: {
  title: string;
  image: any;
  levelNumber: number;
}) {
  const { practiceTool } = usePracticeTool();
  return (
    <View>
      <View style={styles.view3}>
        <View style={styles.button}>
          <Text style={styles.text5}>{title}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          router.replace(`/mission/${practiceTool}/${levelNumber}`)
        }
      >
        <View style={styles.sectionRow}>
          <Chouette style={styles.chouette} />
          <Image source={image} resizeMode={"contain"} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  chouette: {
    height: 385,
    marginBottom: 15,
    borderWidth: 1,
  },
  text5: {
    color: "#F2FBF8",
    fontSize: 24,
    fontWeight: "bold",
  },
  view3: {
    marginBottom: 16,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
