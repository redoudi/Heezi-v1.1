import { CategoryCard } from "@/components/home/category-card";
import { LevelSection } from "@/components/home/level-section";
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
      <LevelSection
        level="Niveau. 1"
        score="500"
        coinIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/c30140rw_expires_30_days.png"
        badgeIconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/a8a1zbel_expires_30_days.png"
        onScorePress={() => alert("Pressed!")}
      />

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
