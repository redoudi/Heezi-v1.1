import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { palette, radius, spacing } from "@/styles/designSystem";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  style?: any;
}

export function ActionButton({ label, onPress, style }: ActionButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <ThemedText style={styles.text}>{label}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    backgroundColor: palette.accentSeafoam,
    borderRadius: radius.md,
    paddingVertical: spacing.xs,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: palette.textOnPrimary,
    marginHorizontal: spacing.md,
  },
});
