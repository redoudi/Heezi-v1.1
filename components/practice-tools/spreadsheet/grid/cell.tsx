import useMissionStore from "@/store/useMissionStore";
import { StyleSheet, Text, View } from "react-native";
export default function Cell({ id }: { id: string }) {
  const {
    spreadsheetData: { grid_data },
  } = useMissionStore();

  return (
    <View style={styles.box}>
      <Text>{grid_data[id]}</Text>
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
});
