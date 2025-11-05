import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function SectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <View style={styles.column2}>
          <View style={styles.row}>
            <View style={styles.row2}>
              <View style={styles.view}>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/z1q84zux_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>{"3 niveaux"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text2}>{"En cours"}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text3}>{"Titre de la section"}</Text>
            <Text style={styles.text4}>
              {"Lörem ipsum sulingar sasade, om än säv. "}
            </Text>
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text5}>{"Cours"}</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kysr25zg_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image2}
        />
        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text5}>{"Quiz"}</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/8d0w5l56_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image3}
        />
        <TouchableOpacity
          style={styles.button3}
          onPress={() => alert("Pressed!")}
        >
          <Text style={styles.text5}>
            {"Lörem ipsum sulingar sasade, om än säv. "}
          </Text>
        </TouchableOpacity>
        <View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/9padzl5p_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image4}
          />
          <View style={styles.row3}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/53eqhtdt_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image5}
            />
            <View style={styles.column3}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/edba9xcc_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image6}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/clgmqpui_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image7}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zjoo1o6j_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/c2md1x7y_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.absoluteImage}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/4kalaek0_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.absoluteImage2}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/y50z3489_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.absoluteImage3}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/dhh51rh2_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.absoluteImage4}
            />
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
  absoluteImage: {
    position: "absolute",
    top: 9,
    left: 0,
    width: 71,
    height: 128,
  },
  absoluteImage2: {
    position: "absolute",
    bottom: 50,
    left: 47,
    width: 123,
    height: 135,
  },
  absoluteImage3: {
    position: "absolute",
    top: 0,
    left: 71,
    width: 69,
    height: 98,
  },
  absoluteImage4: {
    position: "absolute",
    top: 0,
    right: 161,
    left: 161,
    height: 127,
    flex: 1,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  button2: {
    alignSelf: "flex-start",
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  button3: {
    alignSelf: "flex-start",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  column: {
    width: 741,
  },
  column2: {
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  column3: {
    width: 89,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 16,
  },
  image2: {
    height: 385,
    marginBottom: 16,
  },
  image3: {
    height: 385,
    marginBottom: 15,
  },
  image4: {
    width: 70,
    height: 59,
    marginTop: 35,
    marginBottom: 22,
    marginLeft: 264,
  },
  image5: {
    width: 177,
    height: 135,
    marginTop: 84,
    marginRight: 118,
  },
  image6: {
    width: 70,
    height: 59,
    marginBottom: 34,
  },
  image7: {
    width: 70,
    height: 59,
    marginBottom: 38,
    marginLeft: 18,
  },
  image8: {
    width: 70,
    height: 59,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  row2: {
    width: 138,
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 39,
  },
  text: {
    color: "#1C5348",
    fontSize: 14,
  },
  text2: {
    color: "#0A2924",
    fontSize: 16,
  },
  text3: {
    color: "#0A2924",
    fontSize: 28,
    marginBottom: 7,
  },
  text4: {
    color: "#0A2924",
    fontSize: 16,
    marginRight: 86,
    width: 151,
  },
  text5: {
    color: "#F2FBF8",
    fontSize: 24,
    fontWeight: "bold",
  },
  view: {
    width: 62,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  view2: {
    width: 68,
    backgroundColor: "#A6E9D4",
    borderRadius: 8,
    padding: 4,
  },
  view3: {
    marginBottom: 16,
  },
});
