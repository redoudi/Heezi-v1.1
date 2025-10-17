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
const categories = [
  {
    title: "Gestion d'un tableur",
    backgroundColor: "#72D6BA",
    textColor: "#0A2924",
  },
  {
    title: "Edition de texte",
    backgroundColor: "#33C6FD",
    textColor: "#0A4F70",
  },
  {
    title: "Lorem ipsum",
    backgroundColor: "#A085CD",
    textColor: "#573D75",
  },
  {
    title: "Lorem ipsum",
    backgroundColor: "#F9BE3C",
    textColor: "#772D10",
  },
];
export function RightColumn() {
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
