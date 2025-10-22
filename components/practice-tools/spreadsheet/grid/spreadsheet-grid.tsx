import { FlatList, StyleSheet, Text, View } from "react-native";
import SpreadsheetGridWrong from "./spreadsheet-grid_wrong";

const COLUMNS = [
  ["◢", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
  ["◢", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
];

// Row configuration
const ROWS_ = [...Array(19).keys()];
const ROWS = [["a", "b"]];

export default function SpreadsheetGrid() {
  return (
    <View>
      <View style={styles.column12}>
        <FlatList
          data={COLUMNS}
          renderItem={({ item }) => (
            <View style={styles.view3}>
              <Text style={styles.text9}>{item}</Text>
            </View>
          )}
        />
      </View>
      <SpreadsheetGridWrong />
    </View>
  );
}

const styles = StyleSheet.create({
  column12: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 17,
    marginHorizontal: 8,
  },
  row15: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    marginHorizontal: 8,
  },
  view3: { width: 106 },
  text9: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
