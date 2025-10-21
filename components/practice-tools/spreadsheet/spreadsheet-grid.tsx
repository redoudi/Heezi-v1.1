import { View } from "react-native";
import ColumnHeaders from "./column-headers";
import GridCells from "./grid-cells";
import { styles } from "./titlebar";

export default function SpreadsheetGrid() {
  return (
    <View style={styles.column12}>
      <ColumnHeaders />
      <GridCells />
    </View>
  );
}
