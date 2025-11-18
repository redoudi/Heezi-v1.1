import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { PracticeTool } from "@/context/usePracticeTool";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
  tool: PracticeTool;
}

export function CategoryList() {
  const { practiceTool } = usePracticeToolConstants();
  const categories = Object.values(practiceToolsConstants);

  return (
    <View style={styles.categoryList}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            router.push(`/play/${category.tool}`);
          }}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor:
                  practiceTool === category.tool
                    ? category.backgroundColor
                    : "#FFFFFF",
                borderWidth: practiceTool === category.tool ? 0 : 1,
                borderColor: category.backgroundColor,
              },
            ]}
          >
            <Text style={[styles.text, { color: category.textColor }]}>
              {category.title}
            </Text>
          </View>
        </TouchableOpacity>
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
