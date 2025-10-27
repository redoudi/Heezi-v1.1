import ExportFormatButtons from "@/components/ExportFormatButtons";
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Pressed!")}
            >
              <View style={styles.view3}>
                <View style={styles.box}></View>
              </View>
            </TouchableOpacity>
            <ExportFormatButtons />
            <TouchableOpacity
              style={styles.buttonRow5}
              onPress={() => router.push("/")}
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
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 533,
    height: 782,
    backgroundColor: "#000000",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
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
  view3: {
    alignSelf: "flex-start",
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingLeft: 3,
    paddingRight: 16,
  },
});
