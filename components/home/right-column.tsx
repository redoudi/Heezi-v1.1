import { CategoryCard } from "@/components/home/category-card";
import { LevelHeader } from "@/components/home/level-header";
import { StyleSheet, View } from "react-native";

interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
}

interface RightColumnProps {
  categories: CategoryItem[];
}

export function RightColumn({ categories }: RightColumnProps) {
  return (
    <View style={styles.rightColumn}>
      <LevelHeader onScorePress={() => alert("Pressed!")} />

      <View style={styles.categoryList}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            backgroundColor={category.backgroundColor}
            textColor={category.textColor}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rightColumn: {
    width: 363,
    backgroundColor: "#FFFFFF",
  },
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
});
