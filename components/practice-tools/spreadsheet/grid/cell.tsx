import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function Cell({ id }: { id: string }) {
  const { spreadsheetData, setCellsSelected, setCellValue, cellsEnabled } =
    useSpreadsheetStore();
  const cellsValues = spreadsheetData?.cellsValues;
  const cellsSelected = spreadsheetData?.cellsSelected;
  const cellsStyles = spreadsheetData?.cellsStyles;

  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (
      id &&
      cellsSelected?.includes(id) &&
      textInputRef.current &&
      cellsEnabled?.includes(id)
    ) {
      textInputRef.current?.focus();
    }
  }, [cellsSelected, id, cellsEnabled]);

  return cellsEnabled?.includes(id) && cellsSelected?.includes(id) ? (
    <TextInput
      style={[styles.box, styles.selectedBox, cellsStyles?.[id]]}
      value={cellsValues?.[id] || ""}
      onChangeText={(text) => setCellValue(id, text)}
      ref={textInputRef}
    />
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
