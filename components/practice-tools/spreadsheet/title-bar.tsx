import { Image, StyleSheet, View } from "react-native";

export default function TitleBar() {
  return (
    <View style={styles.row}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/5jt7jwsg_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/os183jfm_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image2}
      />
      <Image
        source={require("../../../assets/images/undo.png")}
        resizeMode={"stretch"}
        style={styles.image3}
      />
      <Image
        source={require("../../../assets/images/redo.png")}
        resizeMode={"stretch"}
        style={styles.image4}
      />
      <Image
        source={require("../../../assets/images/exit.png")}
        resizeMode={"stretch"}
        style={styles.image4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 38,
    height: 32,
    marginLeft: 32,
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
    marginRight: 1134,
  },
  image5: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  button: {
    width: 40,
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 32,
  },
});
