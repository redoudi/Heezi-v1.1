import usePracticeTool, { PracticeTool } from "@/context/usePracticeTool";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CategoryItem {
  title: string;
  backgroundColor: string;
  textColor: string;
  tool: PracticeTool;
}

export function CategoryList() {
  const { setPracticeTool, practiceTool } = usePracticeTool();
  const categories: CategoryItem[] = [
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

  return (
    <View style={styles.categoryList}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setPracticeTool(category.tool);
          }}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor:
                  practiceTool === category.tool
                    ? "#FFFFFF"
                    : category.backgroundColor,
                borderWidth: practiceTool === category.tool ? 1 : 0,
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
