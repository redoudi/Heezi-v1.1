import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";

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
    backgroundColor: "#45BC9E",
    borderRadius: 8,
    paddingVertical: 8,
  },
  text: StyleSheet.compose(typography.headline, {
    color: "#F2FBF8",
    marginHorizontal: 15,
  }),
});
