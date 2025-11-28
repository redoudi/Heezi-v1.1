import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function TextEditorMenuBar() {
  return (
    <View style={styles.row2}>
      <TouchableOpacity style={styles.button2} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Accueil"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Insertion"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Dessin"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Conception"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Mise en page"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Références"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Publipostage"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Révision"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button8} onPress={() => {}} disabled>
        <Text style={styles.text}>{"Affichage"}</Text>
      </TouchableOpacity>
      <View style={styles.row3}>
        <TouchableOpacity style={styles.button9} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/ufeyprsl_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image6}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/v82hp4b9_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image7}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 11,
  },
  button2: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginLeft: 32,
    marginRight: 8,
  },
  button3: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button4: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 9,
  },
  button5: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
  },
  button6: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 9,
  },
  button7: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 9,
    marginRight: 8,
  },
  button8: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 65,
  },
  button9: {
    width: 33,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button10: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  row3: {
    width: 73,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 33,
  },
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "#292929",
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
});
