import { StyleSheet, TouchableOpacity, View } from "react-native";

interface SnapshotPreviewProps {
  onPress: () => void;
}

export default function SnapshotPreview({ onPress }: SnapshotPreviewProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.view3}>
        <View style={styles.box}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 533,
    height: 782,
    backgroundColor: "#000000",
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
