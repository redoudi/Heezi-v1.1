import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export function TitleBar() {
  const { practiceTool } = usePracticeToolConstants();
  return (
    <View style={styles.row}>
      <Image
        source={require("@/assets/images/f36dtxie_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <Image
        source={require("@/assets/images/x1cberci_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image2}
      />
      <Image
        source={require("@/assets/images/1tMFzp8.png")}
        resizeMode={"stretch"}
        style={styles.image3}
      />
      <Image
        source={require("@/assets/images/1tMFzp8.png")}
        resizeMode={"stretch"}
        style={styles.image4}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.replace(`/(tabs)/play/${practiceTool}/section-screen`)
        }
      >
        <Image
          source={require("@/assets/images/iycoag37_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image5}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
  },
  image: {
    width: 38,
    height: 32,
    marginLeft: 32,
    marginRight: 8,
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
    width: 40,
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 32,
  },
  image5: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
});
