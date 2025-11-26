import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { router, useGlobalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  toolName: keyof typeof practiceToolsConstants;
}

export function CategoryCard({ toolName }: CategoryCardProps) {
  const { practiceTool } = useGlobalSearchParams();
  const cardToolConstants = practiceToolsConstants[toolName];

  const selectedTool = Array.isArray(practiceTool)
    ? practiceTool[0]
    : practiceTool;
  const fallbackTool = Object.keys(practiceToolsConstants)[0];

  const isCurrentTool = (selectedTool ?? fallbackTool) === toolName;

  const backgroundColor = isCurrentTool
    ? cardToolConstants.backgroundColor
    : "#FFFFFF";

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/play/${toolName}`);
      }}
    >
      <View
        style={[
          styles.container,
          {
            borderColor: cardToolConstants.backgroundColor,
            borderWidth: isCurrentTool ? 0 : 1,
            backgroundColor,
          },
        ]}
      >
        <Text style={[styles.text, { color: cardToolConstants.textColor }]}>
          {cardToolConstants.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 49,
    marginBottom: 8,
    marginRight: 8,
    paddingRight: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
