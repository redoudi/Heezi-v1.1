import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { rangeToCells } from "@/utils/spreadsheetUtils";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ResultSnapshot from "./result-snapshot";

export default function SnapshotPreview() {
  const {
    spreadsheetData: { cellsValues },
  } = useSpreadsheetStore();

  const col1 = rangeToCells("A2:A7");
  const col2 = rangeToCells("B2:B7");
  const col1Values = col1.map((cell) => cellsValues[cell]);
  const col2Values = col2.map((cell) => cellsValues[cell]);
  const cellsIndices = [
    ["A1", "B1"],
    ["A2", "B2"],
    ["A3", "B3"],
    ["A4", "B4"],
    ["A5", "B5"],
    ["A6", "B6"],
    ["A7", "B7"],
  ];
  const values = cellsIndices.map((cellsRow) =>
    cellsRow.map((cell) => cellsValues[cell])
  );

  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.view3}>
        <View style={styles.box}>
          <ResultSnapshot data={cellsIndices} />
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
