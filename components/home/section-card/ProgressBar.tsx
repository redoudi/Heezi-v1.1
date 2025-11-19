import { StyleSheet, View } from "react-native";

export default function ProgressBar(): React.ReactNode {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarFill}>
        <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  progressBarFill: {
    backgroundColor: "#33C6FD",
    borderRadius: 4,
  },
  box: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
});
