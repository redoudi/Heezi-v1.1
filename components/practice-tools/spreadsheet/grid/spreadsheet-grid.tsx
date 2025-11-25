import useCursor from "@/context/useCursor";
import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cell from "./cell";
import HeaderRow from "./header-row";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
// Row configuration
const ROWS = Array.from({ length: 18 }, (_, i) => i + 1);

export default function SpreadsheetGrid() {
  // useKbdSpdshtNextRow();
  // Header component

  // Row component
  const rowNumberContainerRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  useEffect(() => {
    if (setContentRef) {
      setContentRef("rowNumbersColumn", rowNumberContainerRef);
    }
  }, [setContentRef]);
  return (
    <View style={styles.mainContainer}>
      <HeaderRow columnsLetters={COLUMNS} />
      <ScrollView showsVerticalScrollIndicator>
        {ROWS.map((item, index) => (
          <View key={item} style={styles.gridCellsContainer}>
            <View ref={rowNumberContainerRef} style={styles.rowNumberContainer}>
              <Text style={styles.rowNumber}>{item}</Text>
            </View>
            {COLUMNS.map((_, colIndex) => (
              <Cell
                key={`${colIndex}-${index}`}
                id={`${String.fromCharCode(65 + colIndex)}${index + 1}`}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 17,
    marginHorizontal: 8,
  },
  gridCellsContainer: {
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
    marginRight: 4,
  },
});
