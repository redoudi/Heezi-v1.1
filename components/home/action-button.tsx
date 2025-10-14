import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  style?: any;
}

export function ActionButton({ label, onPress, style }: ActionButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
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
  text: {
    color: "#F2FBF8",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});
