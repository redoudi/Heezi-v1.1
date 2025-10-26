import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function Cell({ id }: { id: string }) {
  const {
    spreadsheetData: { cellValues, cellsSelected },
    setCellsSelected,
    setCellValue,
  } = useSpreadsheetStore();

  return cellsSelected.includes(id) ? (
    <TextInput
      style={[styles.box, styles.selectedBox]}
      value={cellValues[id]}
      onChangeText={(text) => setCellValue(id, text)}
    />
  ) : (
    <Pressable onPress={() => setCellsSelected([id])}>
      <View style={[styles.box]}>
        <Text>{cellValues[id]}</Text>
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
