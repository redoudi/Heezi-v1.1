import { useKbdSpdshtNextRow } from "@/hooks/use-keyboard";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Cell from "./cell";
import HeaderRow from "./header-row";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
// Row configuration
const ROWS = Array.from({ length: 18 }, (_, i) => ({
  id: (i + 1).toString(),
  rowNumber: i + 1,
}));

export default function SpreadsheetGrid() {
  useKbdSpdshtNextRow();
  // Header component

  // Row component
  const renderRow = ({
    item,
    index,
  }: {
    item: (typeof ROWS)[0];
    index: number;
  }) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.rowNumberContainer}>
          <Text style={styles.rowNumber}>{item.id}</Text>
        </View>
        {COLUMNS.map((_, colIndex) => (
          <Cell
            key={`${String.fromCharCode(65 + colIndex)}${index + 1}`}
            id={`${String.fromCharCode(65 + colIndex)}${index + 1}`}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.column12}>
      <HeaderRow columnsLetters={COLUMNS} />

      <FlatList
        data={ROWS}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
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
  scrollView: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  rowNumber: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  view2: {
    width: 106,
    marginRight: 9,
  },
  view3: {
    width: 106,
  },
  rowNumberContainer: {
    width: 28,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 16,
  },
});
