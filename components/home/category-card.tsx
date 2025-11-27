import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { router, useGlobalSearchParams } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  palette,
  radius,
  spacing,
} from "@/styles/designSystem";
import { ThemedText } from "@/components/themed-text";
import { typography, withTextStyle } from "@/styles/typography";

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
        <ThemedText style={[styles.text, { color: cardToolConstants.textColor }]}>
          {cardToolConstants.title}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.md,
    paddingVertical: 49,
    marginBottom: spacing.xs,
    marginRight: spacing.xs,
    paddingRight: spacing.md,
  },
  text: withTextStyle(typography.headline, {
    marginLeft: spacing.md,
  }),
});
