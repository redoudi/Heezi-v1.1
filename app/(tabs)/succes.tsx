import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function SuccessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.view2}>
              <Text style={styles.text}>{"10/100 succès débloqués (10%)"}</Text>
            </View>
            <View style={styles.view3}>
              <View style={styles.box}></View>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/xgqljo1q_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zvwgawv2_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/v2mfz6nn_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0h5s0ff3_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kdurlwx0_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
            </View>
          </View>
          <View style={styles.row2}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/nuaa8tx6_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.column3}>
              <Text style={styles.text2}>{"Titre du succès"}</Text>
              <Text style={styles.text3}>
                {
                  "Lörem ipsum or nor, renysesm saserad.Lörem ipsum or nor, renysesm "
                }
              </Text>
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
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingBottom: 120,
    marginTop: 32,
    marginHorizontal: 32,
  },
  column2: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 18,
    marginBottom: 16,
  },
  column3: {
    width: 489,
  },
  image: {
    borderRadius: 8,
    width: 85,
    height: 85,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
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
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
  text2: {
    color: "#3D3D3D",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text3: {
    color: "#3D3D3D",
    fontSize: 16,
  },
  view: {
    width: 1184,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 16,
  },
  view3: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
});
