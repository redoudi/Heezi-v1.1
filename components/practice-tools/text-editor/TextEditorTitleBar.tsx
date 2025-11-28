import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export function TitleBar() {
  const { practiceTool } = usePracticeToolConstants();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftRow}>
        <Image
          source={require("@/assets/images/f36dtxie_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/x1cberci_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/1tMFzp8.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/1tMFzp8.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
        }
      >
        <Image
          source={require("@/assets/images/iycoag37_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.exitIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 32,
    paddingTop: 8,
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  image: {
    width: 32,
    height: 32,
  },
  image2: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  image3: {
    width: 61,
    height: 39,
    marginRight: 8,
  },
  image4: {
    width: 39,
    height: 42,
    marginRight: 1134,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
  },
  exitIcon: {
    width: 20,
    height: 20,
  },
});
