import { ScrollableScreen } from "@/components/scrollable-screen";
import Watermark from "@/components/ui/watermark";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScoreScreen() {
  return (
    <ScrollableScreen contentContainerStyle={styles.mainContainer}>
      <View style={styles.mainContent}>
        <Watermark text="BIENTÔT DISPONIBLE" />
        <View style={styles.column2}>
          <View style={styles.row}>
            <Image
              source={require("@/assets/images/Bronze.png")}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <Image
              source={require("@/assets/images/Argent.png")}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <Image
              source={require("@/assets/images/Or.png")}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <Image
              source={require("@/assets/images/Diamant.png")}
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
              <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
                disabled
              >
                <Text style={styles.text4}>{"Classement Global"}</Text>
              </TouchableOpacity>
              <View style={styles.view2}>
                <Text style={styles.text5}>
                  {"Classement de votre session"}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow2}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text9}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text10}>{"Nom de la personne"}</Text>
              <Text style={styles.text11}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRow3}
              onPress={() => {}}
              disabled
            >
              <Text style={styles.text6}>{"1."}</Text>
              <Image
                source={require("@/assets/images/Coq.png")}
                resizeMode={"stretch"}
                style={styles.image4}
              />
              <Text style={styles.text7}>{"Nom de la personne"}</Text>
              <Text style={styles.text8}>{"Nv.100"}</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("@/assets/images/ScoreIcon.png")}
            resizeMode={"contain"}
            style={styles.scoreIcon}
          />
        </View>
      </View>
    </ScrollableScreen>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
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
  scoreIcon: {
    flex: 1,
    marginTop: 24,
    marginLeft: 34,
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
    fontSize: 22,
    color: "#292929",
    marginBottom: 8,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 10,
    lineHeight: 24,
    color: "#292929",
    marginBottom: 8,
  },
  text3: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
  },
  text4: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
  },
  text5: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0A2924",
    marginLeft: 16,
    width: 224,
  },
  text6: {
    fontSize: 22,
    color: "#292929",
    marginLeft: 16,
    marginRight: 20,
  },
  text7: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#292929",
    flex: 1,
  },
  text8: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#292929",
    marginRight: 20,
  },
  text9: {
    fontSize: 22,
    color: "#1B463E",
    marginLeft: 16,
    marginRight: 20,
  },
  text10: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1B463E",
    flex: 1,
  },
  text11: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B463E",
    marginRight: 20,
  },
  mainContent: {
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
