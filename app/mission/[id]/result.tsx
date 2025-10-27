import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function ResultScreen() {
  const { id } = useLocalSearchParams();
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
            <View style={styles.column2}>
              <Text style={styles.text}>
                {"Remarque de la performance réalisée"}
              </Text>
              <Text style={styles.text2}>
                {
                  "Lörem ipsum sageledes neliga vade homosat. Filomani rende om sose. "
                }
              </Text>
              <View style={styles.column3}>
                <View style={styles.row}>
                  <Text style={styles.text3}>{"+3"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/niw8yegh_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                </View>
                <View style={styles.row2}>
                  <Text style={styles.text4}>{"+500"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/3ixeh7z2_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image2}
                  />
                </View>
                <View style={styles.row3}>
                  <View style={styles.column4}>
                    <View style={styles.view4}>
                      <Text style={styles.text5}>{"Nv.1"}</Text>
                    </View>
                    <View style={styles.view5}>
                      <View style={styles.box2}></View>
                    </View>
                  </View>
                  <Text style={styles.text6}>{"+100xp"}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => router.push(`/mission/${id}/result`)}
            >
              <Text style={styles.text7}>{"Continuer"}</Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/bwp5ecq4_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image3}
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
    height: 653,
    backgroundColor: "#000000",
  },
  box2: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  buttonRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 399,
  },
  column: {
    marginBottom: 2,
    marginHorizontal: 8,
  },
  column2: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  column3: {
    alignSelf: "flex-start",
  },
  column4: {
    width: 441,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    marginRight: 8,
  },
  image: {
    borderRadius: 8,
    width: 24,
    height: 19,
    marginRight: 446,
  },
  image2: {
    borderRadius: 8,
    width: 20,
    height: 20,
    marginRight: 425,
  },
  image3: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  row2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#292929",
    fontSize: 28,
    marginBottom: 8,
  },
  text2: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 8,
  },
  text3: {
    color: "#F95F3C",
    fontSize: 20,
    marginLeft: 4,
    marginRight: 8,
  },
  text4: {
    color: "#F28B0E",
    fontSize: 20,
    marginLeft: 4,
    marginRight: 8,
  },
  text5: {
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: "bold",
  },
  text6: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
  },
  text7: {
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
    paddingVertical: 8,
    paddingLeft: 3,
    paddingRight: 16,
  },
  view4: {
    alignSelf: "flex-start",
    paddingBottom: 1,
    marginBottom: 4,
    marginRight: 406,
  },
  view5: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginRight: 8,
  },
});
