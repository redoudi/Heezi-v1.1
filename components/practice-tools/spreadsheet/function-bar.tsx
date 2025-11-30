import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FunctionBar() {
  return (
    <View style={styles.row4}>
      <TouchableOpacity style={styles.buttonRow7} onPress={() => {}} disabled>
        <Text style={styles.text5}>{"A20"}</Text>
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
          <Text style={styles.text8}>{"fx"}</Text>
          <Image
            source={require("@/assets/images/fp37iklk_expires_30_days.png")}
            resizeMode={"stretch"}
            style={styles.image33}
          />
        </View>
      </View>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  row4: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
  },
  buttonRow7: {
    width: 88,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginLeft: 32,
    marginRight: 8,
  },
  text5: {
    fontSize: 10,
    color: "#292929",
    marginLeft: 8,
  },
  image12: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 8,
  },
  row13: {
    width: 96,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  image31: {
    borderRadius: 8,
    width: 12,
    height: 12,
    marginLeft: 8,
    marginRight: 10,
  },
  image32: {
    borderRadius: 8,
    width: 19,
    height: 14,
    marginRight: 10,
  },
  row14: {
    width: 29,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  text8: {
    fontSize: 10,
    color: "#292929",
    marginRight: 6,
  },
  image33: {
    width: 11,
    height: 7,
  },
  input: {
    flex: 1,
    borderRadius: 8,
    height: 24,
    marginRight: 8,
    backgroundColor: "#EFEFEF",
  },
});
