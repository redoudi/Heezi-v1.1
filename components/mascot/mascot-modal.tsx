import { Image, Modal, StyleSheet, Text, View } from "react-native";

export default function MascotModal() {
  return (
    <Modal
      visible={true}
      transparent
      animationType="fade"
      onRequestClose={() => {
        console.log("close");
      }}
    >
      <View style={styles.container}>
        <View style={styles.column}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/paauqhmf_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image}
          />
          <View style={styles.view}>
            <Text style={styles.text}>
              {"Lörem ipsum köttskatt astrolig: nemiren men maligen !!!"}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/dwoxzuh6_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image2}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "#FFFFFF",
  },
  column: {
    width: 748,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 17,
    paddingLeft: 15,
    paddingRight: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  image: {
    borderRadius: 8,
    height: 398,
    marginBottom: 8,
  },
  image2: {
    borderRadius: 8,
    width: 32,
    height: 21,
  },
  text: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
  },
  view: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 8,
    marginBottom: 8,
  },
});
