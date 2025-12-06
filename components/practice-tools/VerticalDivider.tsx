import { StyleSheet, View } from "react-native";

export default function VerticalDivider() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 8,
  },
  divider: {
    width: 1,
    flex: 1,
    backgroundColor: "darkgray",
  },
});
