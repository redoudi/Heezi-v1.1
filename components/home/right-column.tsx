import { CategoryList } from "@/components/home/category-list";
import { LevelSection } from "@/components/home/level-section";
import { View } from "react-native";

export function RightColumn() {
  return (
    <View>
      <LevelSection />
      <CategoryList />
    </View>
  );
}
