import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { PracticeTool } from "@/context/usePracticeTool";
import { CategoryCard } from "@/components/home/category-card";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
  tool: PracticeTool;
}

export function CategoryList() {
  const toolNames = Object.keys(practiceToolsConstants);

  return (
    <View style={styles.categoryList}>
      {toolNames.map((toolName, index) => (
        <CategoryCard key={index} toolName={toolName} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryList: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    borderRadius: 8,
    paddingVertical: 49,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
