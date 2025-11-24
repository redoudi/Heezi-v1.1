import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SuivantBtn({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.downArrowContainer}>
      <Text style={styles.text}>Suivant</Text>
      <Image
        source={require("@/assets/images/7b4n53nk_expires_30_days.png")}
        resizeMode={"stretch"}
        style={styles.image31}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  downArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  image31: {
    width: 32,
    height: 21,
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
});
