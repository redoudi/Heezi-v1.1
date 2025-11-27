import { CategoryList } from "@/components/home/category-list";
import { LevelSection } from "@/components/home/level-section";
import { StyleSheet, View } from "react-native";

export function RightColumn() {
  return (
    <View style={styles.rightColumn}>
      <LevelSection
        level="Niveau : débutant"
        score="0"
        coinIconUri={require("@/assets/images/c30140rw_expires_30_days.png")}
        badgeIconUri={require("@/assets/images/a8a1zbel_expires_30_days.png")}
        onScorePress={() => {}}
      />
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  rightColumn: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
