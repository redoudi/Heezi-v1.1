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
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonRow}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ceguc7fq_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
                <Text style={styles.text}>{".xls"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonRow2}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0a6n5ovw_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
                <Text style={styles.text}>{".pdf"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonRow3}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/xhzm8bjz_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
                <Text style={styles.text}>{".docx"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonRow4}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/yl2nzcpd_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
                <Text style={styles.text}>{".doc"}</Text>
              </TouchableOpacity>
            </View>
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
  buttonRow: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  buttonRow2: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow3: {
    width: 132,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow4: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 56,
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
  image: {
    borderRadius: 8,
    width: 30,
    height: 36,
    marginRight: 10,
  },
  image2: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
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
