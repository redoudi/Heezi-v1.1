import { Image, Text, View } from "react-native";
import { styles } from "./titlebar";

export default function ColumnHeaders() {
  return (
    <View style={styles.row15}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/pt024urq_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image35}
      />
      <View style={styles.view2}>
        <Text style={styles.text9}>{"A"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"B"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"C"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"D"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"E"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"F"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"G"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"H"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"I"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"J"}</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text9}>{"K"}</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text9}>{"L"}</Text>
      </View>
    </View>
  );
}
