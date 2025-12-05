import useCursor from "@/context/useCursor";
import useHighlight from "@/hooks/useHighlight";
import { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Cell from "./cell";
import HeaderRow from "./header-row";

import { COLUMNS, ROWS } from "@/constants/spreadsheetConstants";

// Row configuration

export default function SpreadsheetGrid() {
  const rowNumberContainerRef = useRef<View>(null);
  const { setContentRef } = useCursor();
  const { height } = useWindowDimensions();
  useEffect(() => {
    if (setContentRef) {
      setContentRef("rowNumbersColumn", rowNumberContainerRef);
    }
  }, [setContentRef]);

  const { isHighlighted } = useHighlight("rowNumbersColumn");
  // Calculate max height: window height minus safe area, title bar, ribbon, function bar, and padding
  const scrollViewHeight = height ? Math.max(200, height - 350) : 400;

  return (
    <View style={styles.mainContainer}>
      <HeaderRow columnsLetters={COLUMNS} />
      <ScrollView
        showsVerticalScrollIndicator
        style={{ height: scrollViewHeight }}
        nestedScrollEnabled={true}
      >
        {ROWS.map((item, index) => (
          <View key={item} style={styles.gridCellsContainer}>
            <View
              ref={rowNumberContainerRef}
              style={[
                styles.rowNumberContainer,
                isHighlighted && styles.highlighted,
              ]}
            >
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
    zIndex: 1001,
    position: "relative",
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
