import useCursor from "@/context/useCursor";
import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CellTextInput from "./CellTextInput";
export default function Cell({ id }: { id: string }) {
  const { spreadsheetData, setCellsSelected, setCellValue, cellsEnabled } =
    useSpreadsheetStore();
  const { setContentRef } = useCursor();
  const cellsValues = spreadsheetData?.cellsValues;
  const cellsSelected = spreadsheetData?.cellsSelected;
  const cellsStyles = spreadsheetData?.cellsStyles;

  const cellRef = useRef<View>(null);

  useEffect(() => {
    if (setContentRef && id) {
      setContentRef(id, cellRef);
    }
  }, [setContentRef, id]);

  return (
    <View ref={cellRef}>
      {cellsEnabled?.includes(id) && cellsSelected?.includes(id) ? (
        <CellTextInput id={id} />
      ) : (
        <Pressable onPress={() => setCellsSelected([id])}>
          <View
            style={[
              styles.box,
              cellsSelected?.includes(id) ? styles.selectedBox : {},
            ]}
          >
            <Text style={cellsStyles?.[id]}>{cellsValues?.[id] || ""}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 107,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
  },
  selectedBox: {
    borderWidth: 3,
    borderColor: "black",
  },
});
