import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryCardProps {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export function CategoryCard({ toolName }: CategoryCardProps) {
  const { practiceTool } = useLocalSearchParams();
  const cardToolConstants =
    practiceToolsConstants[toolName as keyof typeof practiceToolsConstants];
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/play/${cardToolConstants.tool}`);
      }}
    >
      <View
        style={[
          styles.container,
          {
            borderColor: cardToolConstants.backgroundColor,
            borderWidth: practiceTool === cardToolConstants.tool ? 0 : 1,
            backgroundColor:
              practiceTool === cardToolConstants.tool
                ? cardToolConstants.backgroundColor
                : "#FFFFFF",
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
