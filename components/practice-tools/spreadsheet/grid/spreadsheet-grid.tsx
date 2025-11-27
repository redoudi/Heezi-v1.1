import useCursor from "@/context/useCursor";
import useHighlight from "@/hooks/useHighlight";
import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import Cell from "./cell";
import HeaderRow from "./header-row";

const COLUMNS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
// Row configuration
const ROWS = Array.from({ length: 18 }, (_, i) => i + 1);

export default function SpreadsheetGrid() {
  const rowNumberContainerRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  useEffect(() => {
    if (setContentRef) {
      setContentRef("rowNumbersColumn", rowNumberContainerRef);
    }
  }, [setContentRef]);

  const { isHighlighted } = useHighlight("rowNumbersColumn");
  return (
    <View style={styles.mainContainer}>
      <HeaderRow columnsLetters={COLUMNS} />
      <ScrollView showsVerticalScrollIndicator>
        {ROWS.map((item, index) => (
          <View key={item} style={styles.gridCellsContainer}>
            <View
              ref={rowNumberContainerRef}
              style={[
                styles.rowNumberContainer,
                isHighlighted && styles.highlighted,
              ]}
            >
              <ThemedText style={styles.rowNumber}>{item}</ThemedText>
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
    marginLeft: 8,
  },
  rowNumber: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#292929",
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
    marginRight: 8,
  },
  highlighted: {
    borderColor: "red",
    borderWidth: 6,
    borderStyle: "dotted",
  },
});
