import ExportFormatButtons from "@/components/ExportFormatButtons";
import SnapshotPreview from "@/components/result-snapshot";
import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExportScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.column}>
            <SnapshotPreview onPress={() => alert("Pressed!")} />
            <ExportFormatButtons />
            <TouchableOpacity
              style={styles.buttonRow5}
              onPress={() => router.replace("/(tabs)")} // go to home page
            >
              <Text style={styles.text2}>{"Continuer"}</Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/a74yzjog_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
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
