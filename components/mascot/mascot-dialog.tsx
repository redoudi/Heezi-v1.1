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
    <View style={styles.textContainer}>
      <Text style={styles.dialogText}>{sampleText}</Text>
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
      style={styles.cornerTriangle}
    />
  );
};

const TextBox = () => {
  return (
    <View style={styles.textBox}>
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

export default function MascotDialog() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainRow}>
        <View style={styles.textBoxContainer}>
          <TextBox />
          <CornerTriangle />
        </View>
        <Mascot />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 36,
    marginHorizontal: 32,
    position: "absolute",
    bottom: 0,

    right: 0,
    zIndex: 1000,
  },
  mainRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textBoxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 0,
  },
  textBox: {
    width: 782,
  },
  column9: {
    marginRight: 0,
  },
  textContainer: {
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
  cornerTriangle: {
    width: 42,
    height: 61,
    alignSelf: "flex-start",
  },
  image34: {
    width: 298,
    height: 295,
  },

  dialogText: {
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
