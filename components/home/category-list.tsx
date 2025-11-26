import { CategoryCard } from "@/components/home/category-card";
import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { PracticeTool } from "@/context/usePracticeTool";
import { StyleSheet, View } from "react-native";

export interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
  tool: PracticeTool;
}

export function CategoryList() {
  const toolNames = Object.keys(practiceToolsConstants);

  return (
    <View style={styles.mainContainer}>
      {toolNames.map((toolName, index) => (
        <CategoryCard key={index} toolName={toolName as PracticeTool} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
    marginRight: 8,
  },
});
