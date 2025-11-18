import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  toolName: keyof typeof practiceToolsConstants;
}

export function CategoryCard({ toolName }: CategoryCardProps) {
  const { practiceTool } = useLocalSearchParams();
  const cardToolConstants = practiceToolsConstants[toolName];

  const isCurrentTool = practiceTool === toolName;

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
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
