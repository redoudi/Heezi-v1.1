import { CategoryList } from "@/components/home/category-list";
import { LevelHeader } from "@/components/home/level-header";
import { StyleSheet, View } from "react-native";

export function RightColumn() {
  return (
    <View style={styles.rightColumn}>
      <LevelHeader onScorePress={() => alert("Pressed!")} />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  rightColumn: {
    width: 363,
    backgroundColor: "#FFFFFF",
  },
});
