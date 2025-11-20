import { ScrollableScreen } from "@/components/scrollable-screen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScoreScreen() {
  return (
    <ScrollableScreen contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <View style={styles.column}>
          <View style={styles.column2}>
            <View style={styles.row}>
              <Image
                source={require("@/assets/images/zyyckjro_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image}
              />
              <Image
                source={require("@/assets/images/b9id1gh6_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image2}
              />
              <Image
                source={require("@/assets/images/1wiy58je_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image2}
              />
              <Image
                source={require("@/assets/images/rtrwfngz_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image3}
              />
            </View>
            <View style={styles.column3}>
              <Text style={styles.text}>{"Bronze"}</Text>
              <Text style={styles.text2}>
                {
                  "Les participants dans le top 10 se verront attribuer un nouveau rang "
                }
              </Text>
              <Text style={styles.text3}>{"7 jours restants"}</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column4}>
              <View style={styles.row3}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.text4}>{"Classement Global"}</Text>
                </TouchableOpacity>
                <View style={styles.view2}>
                  <Text style={styles.text5}>
                    {"Classement de votre session"}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/3lokmvs9_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow2} onPress={() => {}}>
                <Text style={styles.text9}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/6643scml_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text10}>{"Nom de la personne"}</Text>
                <Text style={styles.text11}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/n8b0919f_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/myla2l0p_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/w55o4c0r_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/72f9ifvg_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/lcfh9jwj_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRow3} onPress={() => {}}>
                <Text style={styles.text6}>{"1."}</Text>
                <Image
                  source={require("@/assets/images/6lq83c0i_expires_30_days.png")}
                  resizeMode={"stretch"}
                  style={styles.image4}
                />
                <Text style={styles.text7}>{"Nom de la personne"}</Text>
                <Text style={styles.text8}>{"Nv.100"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column5}>
              <View style={styles.box}></View>
              <View style={styles.box2}></View>
            </View>
          </View>
        </View>
      </View>
    </ScrollableScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  box: {
    height: 686,
    backgroundColor: "#000000",
  },
  box2: {
    width: 518,
    height: 687,
    backgroundColor: "#000000",
    marginLeft: 34,
  },
  button: {
    width: 240,
    alignItems: "center",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 24,
    marginLeft: 16,
    marginRight: 8,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  buttonRow2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  buttonRow3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
  },
  column: {
    margin: 32,
  },
  column2: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  column3: {
    alignItems: "center",
    paddingHorizontal: 305,
    marginHorizontal: 16,
  },
  column4: {
    width: 552,
    marginRight: 16,
  },
  column5: {
    width: 552,
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    paddingBottom: 1,
  },
  image: {
    borderRadius: 8,
    width: 68,
    height: 68,
    marginLeft: 511,
    marginRight: 8,
  },
  image2: {
    borderRadius: 8,
    width: 36,
    height: 36,
    marginRight: 8,
  },
  image3: {
    borderRadius: 8,
    width: 36,
    height: 36,
    marginRight: 376,
  },
  image4: {
    borderRadius: 8,
    width: 40,
    height: 40,
    marginRight: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 37,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  row2: {
    flexDirection: "row",
  },
  row3: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
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
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
  text4: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
  },
  text5: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    width: 224,
  },
  text6: {
    color: "#292929",
    fontSize: 28,
    marginLeft: 16,
    marginRight: 20,
  },
  text7: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  text8: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
  },
  text9: {
    color: "#1B463E",
    fontSize: 28,
    marginLeft: 16,
    marginRight: 20,
  },
  text10: {
    color: "#1B463E",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  text11: {
    color: "#1B463E",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
  },
  view: {
    width: 1184,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    width: 272,
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
});
