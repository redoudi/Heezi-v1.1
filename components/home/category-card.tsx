import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
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

  const isCurrentTool = practiceTool === toolName;

  // if (isCurrentTool) {
  //   console.log("practiceTool", practiceTool);
  //   console.log("current tool", toolName);
  // }

  useEffect(() => {
    console.log("practiceTool", practiceTool);
  }, [practiceTool]);

  const backgroundColor = isCurrentTool
    ? cardToolConstants.backgroundColor
    : "#FFFFFF";

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/play/${toolName}`);
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
