import usePracticeTool from "@/context/usePracticeTool";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function ScenarioScreen() {
  const router = useRouter();
  const [textInput1, onChangeTextInput1] = useState("");
  const { practiceTool } = usePracticeTool();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.column}>
          <View style={styles.view2}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.back()}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/mpnekv0z_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.column2}>
            <View style={styles.view3}>
              <View style={styles.column3}>
                <View style={styles.view4}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/9k555b9b_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image2}
                  />
                </View>
                <TextInput
                  placeholder={
                    "Lörem ipsum köttskatt astrolig: nemiren men maligen !!!"
                  }
                  value={textInput1}
                  onChangeText={onChangeTextInput1}
                  style={styles.input}
                />
                <View style={styles.view5}>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/lpcexk6v_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image3}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Link href={`/mission/practice/${practiceTool}`} asChild>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text}>{"Commencer"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/6ce1tot3_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
              </TouchableOpacity>
            </Link>
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
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    paddingVertical: 8,
    marginLeft: 8,
  },
  button2: {
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
  },
  column2: {
    alignItems: "center",
    paddingHorizontal: 396,
    marginHorizontal: 40,
  },
  column3: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  image: {
    borderRadius: 8,
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  image2: {
    borderRadius: 8,
    width: 248,
    height: 248,
  },
  image3: {
    borderRadius: 8,
    width: 30,
    height: 32,
    marginHorizontal: 16,
  },
  image4: {
    borderRadius: 8,
    width: 16,
    height: 24,
    marginRight: 15,
  },
  input: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    width: 536,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
  },
  text: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    marginRight: 11,
  },
  view: {
    width: 1440,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    marginBottom: 16,
    marginHorizontal: 32,
  },
  view3: {
    marginBottom: 32,
  },
  view4: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingBottom: 457,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  view5: {
    alignItems: "flex-end",
  },
});
