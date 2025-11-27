import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { styles } from "./spreadsheet-styles";

export default function FunctionBar() {
  return (
    <View style={styles.row4}>
      <TouchableOpacity style={styles.buttonRow7} onPress={() => {}} disabled>
        <ThemedText style={styles.text5}>{"A20"}</ThemedText>
        <Image
          source={require("@/assets/images/w85265az_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image12}
        />
      </TouchableOpacity>
      <View style={styles.row13}>
        <Image
          source={require("@/assets/images/cmx9ciy9_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image31}
        />
        <Image
          source={require("@/assets/images/2cz9arwn_expires_30_days.png")}
          resizeMode={"stretch"}
          style={styles.image32}
        />
        <View style={styles.row14}>
          <ThemedText style={styles.text8}>{"fx"}</ThemedText>
          <Image
            source={require("@/assets/images/fp37iklk_expires_30_days.png")}
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
