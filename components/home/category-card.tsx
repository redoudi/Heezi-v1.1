import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { palette, radius, spacing } from "@/styles/designSystem";
import { router, useGlobalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

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
    : palette.background;

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/play/${toolName}`);
      }}
      style={[
        styles.container,
        {
          borderColor: cardToolConstants.backgroundColor,
          borderWidth: isCurrentTool ? 0 : 1,
          backgroundColor,
        },
      ]}
    >
      <Image
        source={cardToolConstants.icon}
        resizeMode={"contain"}
        style={styles.icon}
      />
      <Text style={[styles.text, { color: cardToolConstants.textColor }]}>
        {cardToolConstants.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.md,
    paddingVertical: 32,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: spacing.md,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
