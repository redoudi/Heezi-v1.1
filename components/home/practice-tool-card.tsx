import practiceToolsConstants from "@/constants/practiceToolsConstants";
import { isMobile } from "@/utils/isMobile";
import { router, useGlobalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  toolName: keyof typeof practiceToolsConstants;
  style?: any;
}

export function PracticeToolCard({ toolName, style }: CategoryCardProps) {
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
      style={[
        styles.container,
        {
          borderColor: cardToolConstants.backgroundColor,
          borderWidth: isCurrentTool ? 0 : 1,
          backgroundColor,
        },
        style,
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
    borderRadius: 8,
    paddingVertical: !isMobile ? 32 : 8,
    paddingLeft: 8,
    paddingRight: isMobile ? 8 : 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 32,
    height: 32,
  },
});
