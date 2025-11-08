import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { rangeToCells } from "@/utils/spreadsheetUtils";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function ResultSnapshot({ data }) {
  const [headers, ...entries] = data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.snapshotBox}>
        <View style={styles.cellsRow}>
          {headers.map((cell, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.headerText}>{cell}</Text>
            </View>
          ))}
        </View>
        <FlatList
          style={{ borderWidth: 1, borderColor: "green" }}
          data={entries}
          renderItem={({ item }) => {
            return (
              <View style={styles.cellsRow}>
                {item.map((cell, index) => {
                  return (
                    <View key={index} style={styles.cell}>
                      <Text style={styles.text}>{cell}</Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    justifyContent: "center",
  },
  snapshotBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 32,
    borderWidth: 1,
    borderColor: "black",
  },
  cellGrid: {
    flex: 1,

    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 32,
    marginTop: 102,
  },
  cellsRow: {
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "40%",
    textAlign: "center",
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
  column: {
    marginHorizontal: 32,
  },
  text3: {
    color: "#292929",
    fontSize: 16,
    marginBottom: 10,
  },
});
