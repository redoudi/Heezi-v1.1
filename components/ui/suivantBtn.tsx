import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";

export default function SuivantBtn({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.downArrowContainer}>
      <ThemedText style={[typography.headline, styles.text]}>{text}</ThemedText>
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
    marginRight: 11,
  },
});
