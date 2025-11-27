import useExportSpreadsheetValues from "@/hooks/useExportSpreadsheetValues";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";

export default function SpreadsheetResultSnapshot() {
  const { contents: cellsContents } = useExportSpreadsheetValues();
  const [headers, ...entries] = cellsContents;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.snapshotBox}>
        <View style={styles.cellsRow}>
          {headers.map((cell, index) => (
            <View key={index} style={[styles.cell, styles.headerCell]}>
              <ThemedText
                style={[typography.headline, styles.headerText, cell.style]}
              >
                {cell.value}
              </ThemedText>
            </View>
          ))}
        </View>
        <FlatList
          style={styles.flatList}
          data={entries}
          renderItem={({ item }) => {
            return (
              <View style={styles.cellsRow}>
                {item.map((cell, index) => {
                  return (
                    <View key={index} style={styles.cell}>
                      <ThemedText style={[typography.body, styles.text, cell.style]}>
                        {cell.value}
                      </ThemedText>
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
    // borderWidth: 1,
    // borderColor: "black",
  },
  flatList: {
    // borderWidth: 1,
    // borderColor: "green",
  },
  cellGrid: {
    flex: 1,
    borderRadius: 8,
    paddingTop: 32,
    marginTop: 102,
    // borderWidth: 1,
    // borderColor: "#000000",
  },
  cellsRow: {
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth: 1,
  },
  headerCell: {
    borderWidth: 2,
    borderColor: "black",
  },
  cell: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "40%",
    textAlign: "center",
  },
  headerText: {
    color: "#292929",
    marginBottom: 10,
    marginRight: 25,
  },
  text: {
    color: "#292929",
    marginBottom: 10,
  },
  column: {
    marginHorizontal: 32,
  },
  text3: StyleSheet.compose(typography.body, {
    color: "#292929",
    marginBottom: 10,
  }),
});
