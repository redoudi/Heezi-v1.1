import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function Cell({ id }: { id: string }) {
  const { spreadsheetData, selectedCells, setSelectedCells, setCellValue } =
    useSpreadsheetStore();

  return selectedCells.includes(id) ? (
    <TextInput
      style={[styles.box, styles.selectedBox]}
      value={spreadsheetData[id]}
      onChangeText={(text) => setCellValue(id, text)}
    />
  ) : (
    <Pressable onPress={() => setSelectedCells([id])}>
      <View style={[styles.box]}>
        <Text>{spreadsheetData[id]}</Text>
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
