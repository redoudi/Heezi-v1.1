import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function ProfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={styles.column2}>
                  <Text style={styles.text}>{"Niveau. 1"}</Text>
                  <View style={styles.box}></View>
                </View>
                <View style={styles.row2}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/tggwgkm0_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/vf068hk1_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image2}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.row3}>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={styles.image3}
                />
                <View style={styles.column3}>
                  <Text style={styles.text2}>{"Nom du profil"}</Text>
                  <View style={styles.column4}>
                    <Text style={styles.text}>
                      {"10/100 succès débloqués (10%)"}
                    </Text>
                    <View style={styles.box}></View>
                  </View>
                  <View style={styles.column4}>
                    <Text style={styles.text}>
                      {"Progression dans le jeu (10%)"}
                    </Text>
                    <View style={styles.box}></View>
                  </View>
                  <View style={styles.row4}>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/xpt97fg1_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image4}
                    />
                    <View style={styles.view4}>
                      <Text style={styles.text3}>{"Rang bronze"}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
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
    height: 8,
    backgroundColor: "#33C6FD",
    marginHorizontal: 16,
  },
  button: {
    width: 97,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
    marginRight: 9,
  },
  button2: {
    width: 67,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 32,
    paddingBottom: 153,
    marginHorizontal: 32,
    shadowColor: "#249079",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  column2: {
    width: 866,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginRight: 16,
  },
  column3: {
    width: 520,
  },
  column4: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
    width: 65,
    height: 36,
  },
  image2: {
    borderRadius: 8,
    width: 36,
    height: 36,
  },
  image3: {
    width: 520,
    height: 306,
    marginRight: 16,
  },
  image4: {
    borderRadius: 8,
    width: 41,
    height: 51,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 32,
    marginHorizontal: 32,
  },
  row2: {
    width: 173,
    flexDirection: "row",
  },
  row3: {
    flexDirection: "row",
    marginHorizontal: 32,
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDEFC8",
    borderRadius: 8,
    paddingVertical: 16,
  },
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 16,
  },
  text2: {
    color: "#0A2924",
    fontSize: 28,
    marginBottom: 16,
  },
  text3: {
    color: "#B2460B",
    fontSize: 28,
  },
  view: {
    width: 1184,
    backgroundColor: "#DCDCDC",
  },
  view2: {
    backgroundColor: "#D9D9D9",
    paddingBottom: 1,
  },
  view3: {
    backgroundColor: "#000000",
    paddingVertical: 214,
  },
  view4: {
    width: 162,
    alignItems: "center",
  },
});
