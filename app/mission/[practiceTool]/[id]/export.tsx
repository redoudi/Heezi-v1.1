import ExportFormatButtons from "@/components/ExportFormatButtons";
import { MascotDialog } from "@/components/mascot/mascot-bubble";
import SnapshotPreview from "@/components/snapshot-preview";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { getMissionStaticParams } from "@/utils/getMissionStaticParams";
import { router } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const dynamicParams = false;

export function generateStaticParams() {
  return getMissionStaticParams();
}

function ContinuerButton() {
  const { practiceTool, toolConstants } = usePracticeToolConstants();
  return (
    <TouchableOpacity
      style={[styles.continuerButton, { backgroundColor: toolConstants.color }]}
      onPress={() =>
        router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
      } // go to home page
    >
      <Text style={styles.continuerText}>{"Continuer"}</Text>
      <Image
        source={require("@/assets/images/a74yzjog_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.triangleIcon}
      />
    </TouchableOpacity>
  );
}

export default function ExportScreen() {
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.mainContainer, { height: height || "100%" }]}>
      <View style={styles.mainContent}>
        <SnapshotPreview />
        <ExportFormatButtons />
        <ContinuerButton />
      </View>
      <MascotDialog
        bubbleText="Tu peux maintenant télécharger une copie  de ton travail au format que tu veux!"
        textContainerStyle={{ maxWidth: 300 }}
        style={{ bottom: 16 }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flex: 1,
    borderWidth: 1,
    alignItems: "stretch",
    paddingVertical: 32,
    paddingHorizontal: 8,
  },
  continuerButton: {
    alignSelf: "flex-end",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 399,
  },

  triangleIcon: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  continuerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 11,
  },
});
