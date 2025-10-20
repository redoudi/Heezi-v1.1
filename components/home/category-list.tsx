import { CategoryCard } from "@/components/home/category-card";

import usePracticeTool, { PracticeTool } from "@/context/usePracticeTool";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
  tool: PracticeTool;
}

export const categories: CategoryItem[] = [
  {
    title: "Gestion d'un tableur",
    backgroundColor: "#72D6BA",
    textColor: "#0A2924",
    tool: "spreadsheet",
  },
  {
    title: "Edition de texte",
    backgroundColor: "#33C6FD",
    textColor: "#0A4F70",
    tool: "textEditor",
  },
];

export function CategoryList() {
  const { setPracticeTool } = usePracticeTool();

  return (
    <View style={styles.categoryList}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setPracticeTool(category.tool)}
        >
          <CategoryCard
            key={index}
            title={category.title}
            backgroundColor={category.backgroundColor}
            textColor={category.textColor}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
});
