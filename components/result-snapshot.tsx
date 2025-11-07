import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { rangeToCells } from "@/utils/spreadsheetUtils";
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function ResultSnapshot() {
  const {
    spreadsheetData: { cellsValues },
  } = useSpreadsheetStore();

  const col1 = rangeToCells("A2:A7");
  const col2 = rangeToCells("B2:B7");
  const col1Values = col1.map((cell) => cellsValues[cell]);
  const col2Values = col2.map((cell) => cellsValues[cell]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.headerText}>{cellsValues["A1"]}</Text>
            {col1Values.map((value) => (
              <Text style={styles.text}>{value}</Text>
            ))}
          </View>
          <View>
            <Text style={styles.headerText}>{cellsValues["B1"]}</Text>
            {col2Values.map((value) => (
              <Text style={styles.text}>{value}</Text>
            ))}
          </View>
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
  column: {
    marginHorizontal: 32,
  },
  row: {
    flexDirection: "row",
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 32,
    height: "100%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
  },
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
  text3: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
});
