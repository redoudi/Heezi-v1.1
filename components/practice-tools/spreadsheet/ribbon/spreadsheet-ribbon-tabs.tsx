import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { styles } from "../spreadsheet-styles";

export default function RibbonTabs() {
  return (
    <View style={styles.row2}>
      <TouchableOpacity style={styles.button2} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Accueil"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Insertion"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Dessin"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Conception"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Mise en page"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button7} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Références"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Publipostage"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Révision"}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button8} onPress={() => {}} disabled>
        <ThemedText style={styles.text}>{"Affichage"}</ThemedText>
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
