import { View } from "react-native";
import { styles } from "../titlebar";
import ColumnHeaders from "./column-headers";
import GridCells from "./grid-cells";

export default function SpreadsheetGrid() {
  return (
    <View style={styles.column12}>
      <ColumnHeaders />
      <GridCells />
    </View>
  );
}
