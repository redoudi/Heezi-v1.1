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
    <View style={styles.column10}>
      <Text style={styles.text14}>{sampleText}</Text>
      <DownArrow />
    </View>
  );
};

const CornerTriangle = () => {
  return (
    <Image
      source={{
        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/662flub1_expires_30_days.png",
      }}
      resizeMode={"stretch"}
      style={styles.image33}
    />
  );
};

const TextBox = () => {
  return (
    <View style={[styles.column7]}>
      <TextContainer />
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
      <CornerTriangle />
      <Mascot />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  column7: {
    width: 782,
    marginRight: 16,
  },
  column9: {
    marginRight: 0,
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
  image31: {
    width: 32,
    height: 21,
  },
  image33: {
    width: 42,
    height: 61,
  },
  image34: {
    width: 298,
    height: 295,
  },
  row13: {
    flexDirection: "row",
    marginBottom: 36,
    marginHorizontal: 32,
  },
  text14: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 31,
  },
  view38: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});
