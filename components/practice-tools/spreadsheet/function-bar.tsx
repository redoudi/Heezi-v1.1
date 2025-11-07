import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./spreadsheet-styles";

export default function FunctionBar() {
  return (
    <View style={styles.row4}>
      <TouchableOpacity
        style={styles.buttonRow7}
        onPress={() => alert("Pressed!")}
      >
        <Text style={styles.text5}>{"A20"}</Text>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/w85265az_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image12}
        />
      </TouchableOpacity>
      <View style={styles.row13}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/cmx9ciy9_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image31}
        />
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/2cz9arwn_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image32}
        />
        <View style={styles.row14}>
          <Text style={styles.text8}>{"fx"}</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/fp37iklk_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={styles.image33}
          />
        </View>
      </View>
      <Image
        source={require("@/assets/images/1tMFzp8.png")}
        resizeMode={"stretch"}
        style={styles.image34}
      />
    </View>
  );
}
