import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../spreadsheet-styles";

export default function RibbonTabs() {
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
            source={require("@/assets/images/86rkedvc_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image6}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button10} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/zromobil_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image7}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
