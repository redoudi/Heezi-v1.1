import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { rangeToCells } from "@/utils/spreadsheetUtils";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function ResultSnapshot() {
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
  const [headers, ...entries] = cellsIndices;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.snapshotBox}>
        <View style={styles.cellGrid}>
          <View style={{ borderWidth: 1, borderColor: "black" }}>
            <View style={styles.cellsRow}>
              {headers.map((cell, index) => (
                <Text key={index} style={styles.headerText}>
                  {cell}
                </Text>
              ))}
            </View>
          </View>

          <FlatList
            style={{ borderWidth: 1, borderColor: "black" }}
            data={entries}
            renderItem={({ item }) => {
              return (
                <View style={styles.cellsRow}>
                  {item.map((cell, index) => {
                    return (
                      <Text key={index} style={styles.text}>
                        {cell}
                      </Text>
                    );
                  })}
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  snapshotBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
  },
  cellGrid: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 32,
    height: "100%",
  },
  cellsRow: { marginHorizontal: 32, flexDirection: "row" },
  headerText: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 25,
  },
  text: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
  column: {
    marginHorizontal: 32,
  },
  text3: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
});
