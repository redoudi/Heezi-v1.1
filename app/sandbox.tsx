import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const DownArrow = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ojvjgq96_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={styles.image31}
    />
  );
};

const TextContainer = () => {
  const sampleText =
    "Lörem ipsum dologi begon en pirejil i don mikroskade. Teng lena. Stenonde pros om än vattkoppsgodis hypomöns. Antektig reangen mörat i bynade Lörem ipsum dologi begon en pirejil i don mikroskade.";
  return (
    <View style={styles.column9}>
      <View style={styles.column10}>
        <Text style={styles.text14}>{sampleText}</Text>
        <DownArrow />
      </View>
    </View>
  );
};

const CornerTriangle = () => {
  return (
    <View style={styles.view38}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/662flub1_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image33}
      />
    </View>
  );
};

const TextBox = () => {
  return (
    <View style={styles.column7}>
      <TextContainer />
      <CornerTriangle />
    </View>
  );
};

const Mascot = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/tfupuxd4_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={styles.image34}
    />
  );
};

export default function Sandbox() {
  return (
    <SafeAreaView style={styles.row13}>
      <TextBox />
      <Mascot />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  absoluteView: {
    position: "absolute",
    top: 43,
    left: -102,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 22,
    paddingBottom: 23,
    paddingHorizontal: 16,
  },
  absoluteView2: {
    position: "absolute",
    bottom: -5,
    left: -283,
    backgroundColor: "#F9BE3C",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 17,
  },
  box: {
    flex: 1,
    alignSelf: "stretch",
  },
  box2: {
    flex: 1,
  },
  box3: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 4,
  },
  buttonColumn: {
    width: 54,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  buttonColumn2: {
    width: 54,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  buttonRow: {
    width: 241,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 9,
    marginRight: 10,
  },
  buttonRow2: {
    width: 73,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginRight: 20,
  },
  buttonRow3: {
    width: 55,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  column: {
    width: 1440,
    backgroundColor: "#EFEFEF",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  column2: {
    marginBottom: 27,
  },
  column3: {
    backgroundColor: "#FFFFFF",
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 32,
  },
  column4: {
    width: 35,
  },
  column5: {
    width: 399,
    marginRight: 16,
  },
  column6: {
    width: 293,
    marginRight: 17,
  },
  column7: {
    width: 782,
    marginRight: 16,
  },
  column8: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 64,
    marginLeft: 30,
    marginRight: 2,
  },
  column9: {
    marginRight: 42,
  },
  column10: {
    backgroundColor: "#525252",
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    paddingTop: 19,
    paddingBottom: 15,
    paddingLeft: 32,
    paddingRight: 33,
  },
  image: {
    width: 38,
    height: 32,
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
  },
  image5: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  image6: {
    borderRadius: 8,
    width: 17,
    height: 16,
  },
  image7: {
    borderRadius: 8,
    width: 17,
    height: 17,
  },
  image8: {
    borderRadius: 8,
    width: 26,
    height: 31,
    marginBottom: 5,
  },
  image9: {
    borderRadius: 8,
    width: 9,
    height: 6,
  },
  image10: {
    borderRadius: 8,
    width: 19,
    height: 23,
  },
  image11: {
    borderRadius: 8,
    width: 18,
    height: 18,
  },
  image12: {
    borderRadius: 8,
    width: 7,
    height: 10,
  },
  image13: {
    borderRadius: 8,
    width: 6,
    height: 10,
  },
  image14: {
    borderRadius: 8,
    width: 8,
    height: 10,
  },
  image15: {
    borderRadius: 8,
    width: 16,
    height: 10,
  },
  image16: {
    borderRadius: 8,
    width: 11,
    height: 9,
  },
  image17: {
    borderRadius: 8,
    width: 15,
    height: 13,
  },
  image18: {
    borderRadius: 8,
    width: 12,
    height: 14,
  },
  image19: {
    width: 44,
    height: 28,
    marginRight: 4,
  },
  image20: {
    width: 44,
    height: 28,
    marginRight: 8,
  },
  image21: {
    borderRadius: 8,
    width: 15,
    height: 12,
  },
  image22: {
    borderRadius: 8,
    width: 15,
    height: 17,
  },
  image23: {
    borderRadius: 8,
    width: 15,
    height: 14,
  },
  image24: {
    borderRadius: 8,
    width: 14,
    height: 12,
  },
  image25: {
    borderRadius: 8,
    width: 13,
    height: 12,
  },
  image26: {
    width: 49,
    height: 31,
  },
  image27: {
    width: 27,
    height: 15,
  },
  image28: {
    borderRadius: 8,
    width: 31,
    height: 31,
    marginBottom: 4,
  },
  image29: {
    width: 87,
    height: 53,
    marginTop: 1102,
    marginRight: 16,
  },
  image30: {
    borderRadius: 8,
    width: 30,
    height: 22,
  },
  image31: {
    width: 32,
    height: 21,
  },
  image32: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  image33: {
    width: 42,
    height: 61,
  },
  image34: {
    width: 298,
    height: 295,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 11,
    paddingHorizontal: 32,
  },
  row3: {
    width: 73,
    flexDirection: "row",
    alignItems: "center",
  },
  row4: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 6,
  },
  row5: {
    width: 97,
    flexDirection: "row",
    marginRight: 16,
  },
  row6: {
    flexDirection: "row",
    marginBottom: 4,
  },
  row7: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 56,
  },
  row8: {
    flexDirection: "row",
    marginBottom: 8,
  },
  row9: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginRight: 84,
  },
  row10: {
    width: 285,
    flexDirection: "row",
    marginRight: 16,
  },
  row11: {
    width: 242,
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
  },
  row12: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  row13: {
    flexDirection: "row",
    marginBottom: 36,
    marginHorizontal: 32,
  },
  row14: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#292929",
    fontSize: 16,
  },
  text2: {
    color: "#292929",
    fontSize: 14,
    marginBottom: 6,
  },
  text3: {
    color: "#292929",
    fontSize: 14,
  },
  text4: {
    color: "#292929",
    fontSize: 14,
    marginRight: 36,
  },
  text5: {
    color: "#292929",
    fontSize: 14,
    marginRight: 10,
  },
  text6: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  text7: {
    color: "#000000",
    fontSize: 20,
  },
  text8: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 4,
  },
  text9: {
    color: "#000000",
    fontSize: 14,
    marginRight: 199,
  },
  text10: {
    color: "#000000",
    fontSize: 14,
    marginRight: 308,
  },
  text11: {
    color: "#000000",
    fontSize: 14,
    marginRight: 255,
  },
  text12: {
    color: "#000000",
    fontSize: 14,
  },
  text13: {
    color: "#BDBDBD",
    fontSize: 20,
    fontWeight: "bold",
  },
  text14: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 31,
  },
  text15: {
    color: "#903610",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 158,
  },
  view: {
    width: 40,
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    padding: 8,
  },
  view2: {
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 40,
    marginRight: 8,
  },
  view3: {
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 35,
    marginRight: 8,
  },
  view4: {
    width: 130,
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 43,
    marginRight: 9,
  },
  view5: {
    width: 130,
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 7,
    paddingHorizontal: 25,
    marginRight: 8,
  },
  view6: {
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 7,
    paddingHorizontal: 20,
    marginRight: 9,
  },
  view7: {
    width: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 9,
    paddingBottom: 10,
    paddingHorizontal: 26,
    marginRight: 8,
  },
  view8: {
    width: 130,
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 7,
    paddingHorizontal: 20,
    marginRight: 8,
  },
  view9: {
    width: 130,
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingTop: 9,
    paddingBottom: 10,
    paddingHorizontal: 37,
    marginRight: 9,
  },
  view10: {
    width: 130,
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 6,
    paddingHorizontal: 30,
    marginRight: 65,
  },
  view11: {
    width: 33,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  view12: {
    width: 32,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
  },
  view13: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  view14: {
    width: 23,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view15: {
    width: 22,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view16: {
    width: 24,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view17: {
    width: 32,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view18: {
    width: 27,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 11,
  },
  view19: {
    width: 27,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 21,
  },
  view20: {
    width: 31,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view21: {
    width: 33,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  view22: {
    width: 28,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingHorizontal: 8,
  },
  view23: {
    width: 31,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 4,
  },
  view24: {
    width: 31,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  view25: {
    width: 31,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  view26: {
    width: 30,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  view27: {
    width: 29,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  view28: {
    width: 31,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  view29: {
    width: 113,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 33,
    marginRight: 8,
  },
  view30: {
    width: 113,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 32,
  },
  view31: {
    width: 43,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    paddingTop: 27,
    paddingBottom: 28,
    paddingHorizontal: 8,
  },
  view32: {
    width: 62,
    backgroundColor: "#33C6FD",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginTop: 1102,
  },
  view33: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 9,
    marginTop: 48,
    marginBottom: 14,
  },
  view34: {
    marginBottom: 12,
  },
  view35: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 9,
    marginBottom: 14,
  },
  view36: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 9,
    marginBottom: 501,
  },
  view37: {
    alignSelf: "flex-start",
    backgroundColor: "#989898",
    borderRadius: 4,
    paddingRight: 21,
  },
  view38: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});
