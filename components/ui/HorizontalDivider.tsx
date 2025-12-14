import { isMobile } from "@/utils/isMobile";
import { StyleSheet, View } from "react-native";

export function HorizontalDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: !isMobile ? "#EFEFEF" : "lightgray",
    marginHorizontal: "20%",
  },
});
