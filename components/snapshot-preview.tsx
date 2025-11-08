import { useLocalSearchParams } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SpreadsheetResultSnapshot from "./spreadsheet-result-snapshot";
import TextEditorResultSnapshot from "./text-editor-result-snapshot";

export default function SnapshotPreview() {
  const { practiceTool } = useLocalSearchParams();
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.view3}>
        <View style={styles.box}>
          {practiceTool === "spreadsheet" ? (
            <SpreadsheetResultSnapshot />
          ) : (
            <TextEditorResultSnapshot />
          )}
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
