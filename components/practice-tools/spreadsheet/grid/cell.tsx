import useSpreadsheetStore from "@/store/useSpreadsheetStore";
import { Pressable, StyleSheet, Text, View } from "react-native";
export default function Cell({ id }: { id: string }) {
  const {
    spreadsheetData: { grid_data, selected },
    setSelected,
  } = useSpreadsheetStore();

  return selected.includes(id) ? (
    <View style={[styles.box, styles.selectedBox]}>
      <Text>selected</Text>
    </View>
  ) : (
    <Pressable onPress={() => setSelected([id])}>
      <View style={[styles.box]}>
        <Text>{grid_data[id]}</Text>
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
