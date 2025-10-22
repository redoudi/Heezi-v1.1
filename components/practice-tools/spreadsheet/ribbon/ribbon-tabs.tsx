import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../spreadsheetStyles";

export default function RibbonTabs() {
  return (
    <View style={styles.row2}>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Accueil"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button3}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Insertion"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button4}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Dessin"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button5}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Conception"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button6}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Mise en page"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button7}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Références"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button5}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Publipostage"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button4}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Révision"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button8}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text}>{"Affichage"}</Text>
      </TouchableOpacity>
      <View style={styles.row3}>
        <TouchableOpacity
          style={styles.button9}
          onPress={() => alert("Pressed!")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/86rkedvc_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image6}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button10}
          onPress={() => alert("Pressed!")}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zromobil_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image7}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
