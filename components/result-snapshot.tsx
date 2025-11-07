import { StyleSheet, TouchableOpacity, View } from "react-native";
import ResultSnapshot2 from "./result-snapshot2";

interface SnapshotPreviewProps {
  onPress: () => void;
}

export default function SnapshotPreview() {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.view3}>
        <View style={styles.box}>
          <ResultSnapshot2 />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 533,
    height: 782,
    backgroundColor: "#FFFFFF",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  view3: {
    alignSelf: "flex-start",
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingLeft: 3,
    paddingRight: 16,
  },
});
