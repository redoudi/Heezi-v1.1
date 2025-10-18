import { CategoryCard } from "@/components/home/category-card";
import { categories } from "@/constants/categories";
import { StyleSheet, View } from "react-native";

export function CategoryList() {
  return (
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
  );
}

const styles = StyleSheet.create({
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
});
