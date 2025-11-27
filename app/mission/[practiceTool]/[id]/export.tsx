import ExportFormatButtons from "@/components/ExportFormatButtons";
import FullWindowContainer from "@/components/FullWindowContainer";
import { MascotDialog } from "@/components/mascot/mascot-bubble";
import SnapshotPreview from "@/components/snapshot-preview";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

export default function ExportScreen() {
  const { practiceTool } = usePracticeToolConstants();
  return (
    <FullWindowContainer>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.column}>
            <SnapshotPreview />
            <ExportFormatButtons />
            <TouchableOpacity
              style={styles.buttonRow5}
              onPress={() =>
                router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
              } // go to home page
            >
              <Text style={styles.text2}>{"Continuer"}</Text>
              <Image
                source={require("@/assets/images/a74yzjog_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <MascotDialog
        bubbleText="Tu peux maintenant télécharger une copie  de ton travail au format que tu veux!"
        textBoxAndTriangleStyle={{ width: "50%" }}
      />
    </FullWindowContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  buttonRow5: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 399,
  },
  column: {
    paddingHorizontal: 8,
  },
  image2: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 11,
  },
  view: {
    width: 1440,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
  },
});
