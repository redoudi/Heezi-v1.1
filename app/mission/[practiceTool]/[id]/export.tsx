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
  const { width } = useWindowDimensions();
  const responsiveStyles = {
    continuerButton: {
      ...styles.continuerButton,
      backgroundColor: toolConstants.color,
      marginRight: Math.max(8, width * 0.05), // Responsive margin, minimum 8px
    },
    continuerText: {
      ...styles.continuerText,
      fontSize: Math.max(16, width * 0.045), // Responsive font size
    },
    triangleIcon: {
      ...styles.triangleIcon,
      width: Math.max(14, width * 0.04),
      height: Math.max(20, width * 0.06),
    },
  };
  return (
    <TouchableOpacity
      style={responsiveStyles.continuerButton}
      onPress={() =>
        router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
      } // go to home page
    >
      <Text style={responsiveStyles.continuerText}>{"Continuer"}</Text>
      <Image
        source={require("@/assets/images/a74yzjog_expires_30_days.png")}
        resizeMode={"stretch"}
        style={responsiveStyles.triangleIcon}
      />
    </TouchableOpacity>
  );
}

export default function ExportScreen() {
  const { height, width } = useWindowDimensions();
  const responsivePadding = {
    paddingVertical: Math.max(16, height * 0.04),
    paddingHorizontal: Math.max(8, width * 0.02),
  };
  return (
    <SafeAreaView style={[styles.mainContainer, { height: height || "100%" }]}>
      <View style={[styles.mainContent, responsivePadding]}>
        <SnapshotPreview />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ExportFormatButtons />
          <ContinuerButton />
        </View>
      </View>
      <MascotDialog
        bubbleText="Tu peux maintenant télécharger une copie  de ton travail au format que tu veux!"
        downArrowNextStep={undefined}
        style={{ top: 8 }}
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
    width: "100%",
  },
  continuerButton: {
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  triangleIcon: {
    borderRadius: 8,
  },
  continuerText: {
    fontWeight: "bold",
    color: "#0A2924",
    marginRight: 11,
  },
});
